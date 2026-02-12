import { sign } from "jsonwebtoken";
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

        const token = sign({
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET as string,
        { 
            subject: user.id, 
            expiresIn: '30d'
        }

    )
        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export { AuthUserService }