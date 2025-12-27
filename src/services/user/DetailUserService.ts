import { prisma } from "../../lib/prisma"


class DetailUserService {
    async execute(user_id: string | undefined){

    try {
        const userDetail = await prisma.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return userDetail 
        
    } catch (error) {
        return error     
    }
        
    }
}

export { DetailUserService }