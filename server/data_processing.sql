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
