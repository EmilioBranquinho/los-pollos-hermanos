import { prisma } from "../../lib/prisma"

class ListAllProductsService{
    async execute(){

        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return products;
    }
}

export { ListAllProductsService }