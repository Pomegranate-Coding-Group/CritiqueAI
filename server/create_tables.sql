USE ResumeQuestDB

CREATE TABLE tblKEYWORD_TYPE(
	KeywordTypeID INT IDENTITY(1,1) PRIMARY KEY,
	KeyTypeName VARCHAR(64) NOT NULL,
	KeyTypeDesc VARCHAR(2048)
)

CREATE TABLE tblINDUSTRY(
	IndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryName VARCHAR(64) NOT NULL,
	IndustryDesc VARCHAR(2048)
)

CREATE TABLE tblKEYWORD(
	KeywordID INT IDENTITY(1,1) PRIMARY KEY ,
	KeyName VARCHAR(64) NOT NULL,
	KeyDesc VARCHAR(2048),
	KeyLink VARCHAR(2048),
	KeywordTypeID INT FOREIGN KEY REFERENCES tblKEYWORD_TYPE(KeywordTypeID) NOT NULL
)

CREATE TABLE tblKEYWORD_INDUSTRY(
	KeywordIndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryID INT FOREIGN KEY REFERENCES tblINDUSTRY(IndustryID) NOT NULL,
	KeywordID INT FOREIGN KEY REFERENCES tblKEYWORD(KeywordID) NOT NULL,
	Importance INT NOT NULL
)

GO

CREATE PROCEDURE GetIndustryID
@IName VARCHAR(64),
@IID INT OUTPUT
AS
SET @IID = (SELECT IndustryID FROM tblINDUSTRY WHERE IndustryName = @IName)

GO

CREATE PROCEDURE GetKeywordTypeID
@KTName VARCHAR(64),
@KTID INT OUTPUT
AS
SET @KTID = (SELECT KeywordTypeID FROM tblKEYWORD_TYPE WHERE KeyTypeName = @KTName)

GO

CREATE PROCEDURE GetKeywordID
@KName VARCHAR(64),
@KID INT OUTPUT
AS
SET @KID = (SELECT KeywordID FROM tblKEYWORD WHERE KeyName= @KName )

GO

CREATE PROCEDURE GetKeywordIndustryID
@KName1 VARCHAR(64),
@IName1 VARCHAR(64),
@KIID INT OUTPUT
AS
DECLARE @KID1 INT, @IID1 INT

EXEC GetIndustryID
@IName = @IName1,
@IID = @IID1

EXEC GetKeywordID
@KName = @KName1,
@KID = @KID1

SET @KIID = (SELECT KeywordIndustryID FROM tblKEYWORD_INDUSTRY WHERE KeywordID = @KID1 AND IndustryID = @IID1)

GO

CREATE PROCEDURE AddKeywordType
@NewKTName VARCHAR(64),
@NewKTDesc VARCHAR(2048)
AS
INSERT INTO tblKEYWORD_TYPE(KeyTypeName, KeyTypeDesc)
VALUES(@NewKTName, @NewKTDesc)

GO

CREATE PROCEDURE AddKeyword
@NewKeyName VARCHAR(64),
@NewKeyDesc VARCHAR(2048),
@NewKeyLink VARCHAR(2048),
@NewKeyTypeName VARCHAR(64)
AS
DECLARE @NewKeyTypeID INT

EXEC GetKeywordTypeID
@KTName = @NewKeyTypeName,
@KTID = @NewKeyTypeID

IF @NewKeyTypeID IS NULL
BEGIN
	EXEC AddKeywordType
	@NewKTName = @NewKeyTypeName,
	@NewKTDesc = NULL

	SET @NewKeyTypeID = (SELECT SCOPE_IDENTITY())
	BEGIN TRAN T1
		INSERT INTO tblKEYWORD(KeyName, KeyDesc, KeyLink, KeywordTypeID)
		VALUES(@NewKeyName, @NewKeyDesc, @NewKeyLink, @NewKeyTypeID)
	IF @@Error <> 0
		BEGIN
			PRINT '@@ERROR is showing an error somewhere... terminating process'
			ROLLBACK TRANSACTION T2
		END
	ELSE
	COMMIT TRANSACTION T1
END

GO

CREATE PROCEDURE AddIndustry
@NewIndustryName VARCHAR(64),
@NewIndustryDesc VARCHAR(2048)
AS
INSERT INTO tblINDUSTRY(IndustryName, IndustryDesc)
VALUES(@NewIndustryName, @NewIndustryDesc)

GO

CREATE PROCEDURE AddKeywordIndustry
@NewIName VARCHAR(64),
@NewKName VARCHAR(64),
@KImportance INT
AS
DECLARE @NewIID INT, @NewKID INT

EXEC GetKeywordID
@KName = @NewKName,
@KID = @NewKID

EXEC GetIndustryID
@IName = @NewIName,
@IID = @NewIID

IF @NewIID IS NULL
BEGIN
	PRINT 'Invalid industry name';
	THROW 50001, 'Couldnt find industry', 1;
END
IF @NewKID IS NULL
BEGIN
	PRINT 'Invalid keyword name';
	THROW 50001, 'Couldnt keyword industry', 1;
END


BEGIN TRANSACTION T2
INSERT INTO tblKEYWORD_INDUSTRY(IndustryID, KeywordID, Importance)
VALUES(@NewIID, @NewKID, @KImportance)
IF @@Error <> 0
    BEGIN
        PRINT '@@ERROR is showing an error somewhere... terminating process'
        ROLLBACK TRANSACTION T2
    END
ELSE
COMMIT TRANSACTION T2