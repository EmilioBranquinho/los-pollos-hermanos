"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrderService = void 0;
const prisma_1 = require("../../lib/prisma");
class ListOrderService {
    async execute() {
        const orders = await prisma_1.prisma.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return orders;
    }
}
exports.ListOrderService = ListOrderService;
//# sourceMappingURL=ListOrderService.js.map