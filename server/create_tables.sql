CREATE TABLE Keyword(
	KeywordID INT IDENTITY(1,1) PRIMARY KEY ,
	KeyName VARCHAR(64),
	KeyDesc VARCHAR(2048)
	KeyLink VARCHAR(2048),
	KeywordTypeID INT FOREIGN KEY REFERENCES Keyword_Type(KeywordTypeID)
)

CREATE TABLE Keyword_Industry(
	KeywordIndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryID INT,
	KeywordID INT
)

CREATE TABLE Keyword_Type(
	KeywordTypeID INT IDENTITY(1,1) PRIMARY KEY,
	KeyTypeName VARCHAR(64),
	KeyTypeDesc VARCHAR(2048)
)

CREATE TABLE Industry(
	IndustryID INT IDENTITY(1,1) PRIMARY KEY,
	IndustryName VARCHAR(64),
	IndustryDesc VARCHAR(2048)
)