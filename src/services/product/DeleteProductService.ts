import { prisma } from "../../lib/prisma"

class DeleteProductService{
    async execute(product_id: string){

        if(!product_id){
            throw new Error("Error, product_id is mandatory")
        }

        const Deletedproduct = await prisma.product.delete({
            where: {
                id: product_id
            }
        })

        return Deletedproduct;
    }
}

export { DeleteProductService }