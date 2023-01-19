/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "CamTypes" AS ENUM ('sideview', 'topdown', 'isometric', 'thirdperson', 'firtsperson');

-- CreateEnum
CREATE TYPE "FormatTypes" AS ENUM ('onebit', 'eightbit', 'sexteenbit', 'thirdtwobit', 'sixtyfourbit');

-- CreateEnum
CREATE TYPE "bodyTypes" AS ENUM ('biped', 'quadruped', 'fish', 'bird', 'slime', 'multiplelegs');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "avatarURL" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "uploadDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "viewCount" INTEGER NOT NULL,
    "cam" "CamTypes" NOT NULL,
    "format" "FormatTypes" NOT NULL,
    "bodyType" "bodyTypes" NOT NULL,
    "props" TEXT[],
    "tags" TEXT[],
    "action" TEXT[],
    "gameId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "thumbnail" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionToPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post.Title_unique" ON "Post"("Title");

-- CreateIndex
CREATE UNIQUE INDEX "Post.gameId_unique" ON "Post"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Game.tittle_unique" ON "Game"("tittle");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToPost_AB_unique" ON "_CollectionToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToPost_B_index" ON "_CollectionToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToPost" ADD FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToPost" ADD FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
