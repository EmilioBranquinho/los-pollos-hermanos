import { prisma } from "../../lib/prisma";

interface ListProps{
    categoryId: string;
}

class ListByCategoryService {
    async execute(categoryId: string){

        const products = await prisma.product.findMany({
            where: {
                categoryId: categoryId
            }
        })

        return products;
    }
}

export { ListByCategoryService }