-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "yearOfBirth" INTEGER NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);
