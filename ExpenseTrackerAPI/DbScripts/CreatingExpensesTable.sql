CREATE TABLE [dbo].[Expenses]
(
	[ExpenseID] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[ExpenseTypeID] INT NULL,
	[ExpenseValue] MONEY NOT NULL,
	[Description] VARCHAR(500) NULL,
	[Date] DATETIME NULL
	CONSTRAINT [FK_dbo.Expenses_dbo.ExpenseTypes_ExpenseTypeID] FOREIGN KEY ([ExpenseTypeID])
	REFERENCES [dbo].[ExpenseTypes] ([ExpenseTypeID])
);