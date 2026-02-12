"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailOrderService = void 0;
const prisma_1 = require("../../lib/prisma");
class DetailOrderService {
    async execute({ order_id }) {
        const OrderDetails = await prisma_1.prisma.orderItem.findMany({
            where: {
                orderId: order_id
            },
            include: {
                product: true,
                order: true
            }
        });
        if (!OrderDetails) {
            throw new Error("Error, the order doesn't exists");
        }
        return OrderDetails;
    }
}
exports.DetailOrderService = DetailOrderService;
//# sourceMappingURL=DetailOrderService.js.map