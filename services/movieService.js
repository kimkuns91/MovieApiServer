import { PrismaClient } from '../prisma/generated/client/index.js';
const prisma = new PrismaClient();

export const findMovies = async() => {
    return await prisma.movie.findMany();
};