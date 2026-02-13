import { error } from "console"
import { prisma } from "../../lib/prisma";


class DeleteCategoryService {
    async execute(categoryId: string){

        if(!categoryId){
            throw new Error("Category not found");  
        }


        const deletedCategory = await prisma.category.delete({
            where: {
                id: categoryId
            }
        })

        return deletedCategory;
    }
}

export { DeleteCategoryService } 