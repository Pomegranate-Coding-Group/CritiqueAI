USE [ResumeQuestDB]
GO

/****** Object:  Table [dbo].[tblKeywordRAW]    Script Date: 5/3/2022 6:58:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tblKeywordPK](
	KeywordID INT IDENTITY(1,1) PRIMARY KEY,
	[KeyName] [nvarchar](64) NOT NULL,
	[KeyDesc] [nvarchar](2048) NULL,
	[KeyLink] [nvarchar](2048) NULL,
	[KeyTag1] [nvarchar](64) NULL,
	[KeyTag2] [nvarchar](64) NULL,
	[KeyTag3] [nvarchar](64) NULL,
	[KeyTag4] [nvarchar](64) NULL,
	[Industry1] [nvarchar](64) NULL,
	[Industry2] [nvarchar](64) NULL
) ON [PRIMARY]
GO

-- make a copy without null values
INSERT INTO tblKeywordPK(KeyName, KeyDesc, KeyLink, KeyTag1, KeyTag2, KeyTag3, KeyTag4, Industry1, Industry2)
SELECT KeyName, KeyDesc, KeyLink, KeyTag1, KeyTag2, KeyTag3, KeyTag4, Industry1, Industry2
FROM tblKeywordRAW WHERE KeyName IS NOT NULL AND (Industry1 IS NOT NULL OR Industry2 IS NOT NULL)

-- take a look to see if we did it right
SELECT * FROM tblKeywordPK
SELECT * from tblIndustryRAW 

DELETE FROM tblINDUSTRY
INSERT INTO tblINDUSTRY(IndustryName, IndustryDesc)
SELECT IndustryName, IndustryDesc FROM tblIndustryRAW

DELETE FROM tblKEYWORD_TYPE
DELETE FROM tblKEYWORD

DECLARE @MIN_PK INT, @RUN INT
SET @RUN = (SELECT COUNT(*) FROM tblKeywordPK)
DECLARE @OurKeyName VARCHAR(64), 
@OurKeyDesc VARCHAR(2048), 
@OurKeyLink VARCHAR(2048), 
@OurKT1 VARCHAR(64), 
@OurKT2 VARCHAR(64), 
@OurKT3 VARCHAR(64), 
@OurKT4 VARCHAR(64), 
@OurIndustry1 VARCHAR(64), 
@OurIndustry2 VARCHAR(64)

WHILE @RUN > 0
	SET @RUN = @RUN - 1
	SET @MIN_PK = (SELECT MIN(KeywordID) FROM tblKeywordPK)

	SELECT @OurKeyName = KeyName,
		@OurKeyLink = KeyLink,
		@OurKeyDesc = KeyDesc,
		@OurKT1 = KeyTag1,
		@OurKT2 = KeyTag2,
		@OurKT3 = KeyTag3,
		@OurKT4 = KeyTag4,
		@OurIndustry1 = Industry1,
		@OurIndustry2 = Industry2
	FROM tblKeywordPK
	WHERE KeywordID = @MIN_PK

	INSERT INTO tblKEYWORD(KeyName, KeyDesc, KeyLink)
	VALUES(@OurKeyName, @OurKeyDesc, @OurKeyLink)

	EXEC AddKeywordIndustry
	@NewIName = @OurIndustry1,
	@NewKName = @OurKeyName,
	@KImportance = 1

	EXEC AddKeywordIndustry
	@NewIName = @OurIndustry2,
	@NewKName = @OurKeyName,
	@KImportance = 1

	EXEC AddKeywordType 
	@NewKTName = @OurKT1,
	@RefKName = @OurKeyName

	EXEC AddKeywordType 
	@NewKTName = @OurKT2,
	@RefKName = @OurKeyName

	EXEC AddKeywordType 
	@NewKTName = @OurKT3,
	@RefKName = @OurKeyName

	EXEC AddKeywordType 
	@NewKTName = @OurKT4,
	@RefKName = @OurKeyName

	DELETE FROM tblKeywordPK WHERE KeywordID = @MIN_PK