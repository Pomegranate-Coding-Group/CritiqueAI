DROP DATABASE IF EXISTS ResumeQuestDB
CREATE DATABASE ResumeQuestDB
USE ResumeQuestDB

CREATE TABLE tblKEYWORD_TYPE(
	KeywordTypeID INT IDENTITY(1,1) PRIMARY KEY,
	KeyTypeName VARCHAR(64) NOT NULL,
	KeyTypeDesc VARCHAR(2048)
)

CREATE TABLE tblKEYWORD(
	KeywordID INT IDENTITY(1,1) PRIMARY KEY ,
	KeyName VARCHAR(64) NOT NULL,
	KeyDesc VARCHAR(2048),
	KeyLink VARCHAR(2048),
	KeywordTypeID INT FOREIGN KEY REFERENCES tblKEYWORD_TYPE(KeywordTypeID)
)

CREATE TABLE tblKEYWORD_INDUSTRY(
	KeywordIndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryID INT NOT NULL,
	KeywordID INT NOT NULL
)


CREATE TABLE tblINDUSTRY(
	IndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryName VARCHAR(64) NOT NULL,
	IndustryDesc VARCHAR(2048)
)

GO

CREATE PROCEDURE GetIndustryID
@IName VARCHAR(64),
@IID INT OUTPUT
AS
SET @IID = (SELECT IndustryID FROM tblINDUSTRY WHERE IndustryName = @IName)


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

CREATE PROCEDURE AddKeyword
@KeyName1 VARCHAR