import { prisma } from "../../lib/prisma"

interface ProductProps{
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductService{
    async execute({ name, price, description, banner, category_id }: ProductProps){

        const ExistingProduct = await prisma.product.findFirst({
            where:{
                name: name
            }
        })

        if(ExistingProduct){
            throw new Error("Product already exists")
        }

        const product = await prisma.product.create({
            data:{
               name: name,
               price: Number(price),
               description: description,
               banner: banner,
               categoryId: category_id 
            }
        })

        return product;

    }
}

export { CreateProductService }