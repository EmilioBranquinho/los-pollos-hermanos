"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = require("bcrypt");
class AuthUserService {
    async execute({ email, password }) {
        const user = await prisma_1.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new Error("email or password incorrect");
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("email or password incorrect");
        }
        const token = (0, jsonwebtoken_1.sign)({
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: '30d'
        });
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}
exports.AuthUserService = AuthUserService;
//# sourceMappingURL=AuthUserService.js.map