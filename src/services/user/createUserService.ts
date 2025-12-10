import { json } from "stream/consumers"
import { prisma } from "../../lib/prisma"
import { error } from "console"
import { hash } from "bcrypt"

interface CreateUserData {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute( { name, email, password }: CreateUserData){

    if(!email){
        throw new Error("Error, email is mandatory")
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if(existingUser){
        throw new Error("Error, user already exists!")
    }

    const hashedPassword = await hash(password, 8)

    try {
      const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        },
        select: {
            id: true,
            email: true,
            name: true
        }
      })

      return user

    } catch (error) {
        return error;
    }

    }
}

export { CreateUserService }