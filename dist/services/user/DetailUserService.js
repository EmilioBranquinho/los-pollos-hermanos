"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserService = void 0;
const prisma_1 = require("../../lib/prisma");
class DetailUserService {
    async execute(user_id) {
        try {
            const userDetail = await prisma_1.prisma.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });
            return userDetail;
        }
        catch (error) {
            return error;
        }
    }
}
exports.DetailUserService = DetailUserService;
//# sourceMappingURL=DetailUserService.js.map