import { prisma } from "../../lib/prisma"

class ListCategoryService{
    async execute(){

        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        return categories;
    }
}

export { ListCategoryService }