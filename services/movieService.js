import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findMovies = async() => {
    return await prisma.movie.findMany();
};