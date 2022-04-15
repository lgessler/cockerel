/*
  Warnings:

  - You are about to drop the column `recipeCategoryId` on the `Ingredient` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT,
    CONSTRAINT "Ingredient_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ingredient" ("authorId", "description", "id", "name", "url") SELECT "authorId", "description", "id", "name", "url" FROM "Ingredient";
DROP TABLE "Ingredient";
ALTER TABLE "new_Ingredient" RENAME TO "Ingredient";
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
