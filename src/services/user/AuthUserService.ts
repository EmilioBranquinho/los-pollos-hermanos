import { prisma } from "../../lib/prisma";
import { compare } from "bcrypt";

interface AuthUserData {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthUserData){
        
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error("email or password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("email or password incorrect")    
        }

        return { ok: true};
    }
}

export { AuthUserService }