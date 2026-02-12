"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = require("bcrypt");
class CreateUserService {
    async execute({ name, email, password }) {
        if (!email) {
            throw new Error("Error, email is mandatory");
        }
        const existingUser = await prisma_1.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (existingUser) {
            throw new Error("Error, user already exists!");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 8);
        try {
            const user = await prisma_1.prisma.user.create({
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
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=createUserService.js.map