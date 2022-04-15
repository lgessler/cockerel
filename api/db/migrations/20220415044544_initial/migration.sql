-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT,
    CONSTRAINT "Ingredient_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IngredientCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "steps" TEXT,
    CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecipeCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mixer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT
);

-- CreateTable
CREATE TABLE "Tasting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "mixerId" INTEGER NOT NULL,
    "decistars" INTEGER NOT NULL,
    "comments" TEXT,
    CONSTRAINT "Tasting_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tasting_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tasting_mixerId_fkey" FOREIGN KEY ("mixerId") REFERENCES "Mixer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_IngredientToIngredientCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "IngredientCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_IngredientToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RecipeToRecipeCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "RecipeCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToIngredientCategory_AB_unique" ON "_IngredientToIngredientCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToIngredientCategory_B_index" ON "_IngredientToIngredientCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToRecipe_AB_unique" ON "_IngredientToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToRecipe_B_index" ON "_IngredientToRecipe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToRecipeCategory_AB_unique" ON "_RecipeToRecipeCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToRecipeCategory_B_index" ON "_RecipeToRecipeCategory"("B");
