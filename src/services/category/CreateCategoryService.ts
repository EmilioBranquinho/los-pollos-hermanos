import { error } from "console"
import { prisma } from "../../lib/prisma";


class CreateCategoryService {
    async execute(name: string){

        if(!name){
            console.log("sem nome"); 
            throw new error("Erro, name is mandatory!");  
        }

        const existingCategory = await prisma.category.findFirst({
            where: {
                name: name
            }
        });

        if(existingCategory){
            throw new error("Error, category already exists!")
        }

        const category = await prisma.category.create({
            data: {
                name: name
            }
        })

        return { category }
    }
}

export { CreateCategoryService } 