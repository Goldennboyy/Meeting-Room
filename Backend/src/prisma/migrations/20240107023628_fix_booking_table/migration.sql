/*
  Warnings:

  - You are about to drop the column `owner_id` on the `Room` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_owner_id_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "owner_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "owner_id";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
