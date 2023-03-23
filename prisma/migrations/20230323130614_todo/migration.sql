/*
  Warnings:

  - Made the column `is_done` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `is_done` BOOLEAN NOT NULL DEFAULT false;
