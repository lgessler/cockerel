/*
  Warnings:

  - Added the required column `decistars` to the `Tasting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasting" (
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
INSERT INTO "new_Tasting" ("authorId", "createdAt", "id", "mixerId", "recipeId") SELECT "authorId", "createdAt", "id", "mixerId", "recipeId" FROM "Tasting";
DROP TABLE "Tasting";
ALTER TABLE "new_Tasting" RENAME TO "Tasting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
