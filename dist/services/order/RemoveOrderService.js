"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderService = void 0;
const prisma_1 = require("../../lib/prisma");
class RemoveOrderService {
    async execute({ order_id }) {
        const removedOrder = await prisma_1.prisma.order.delete({
            where: {
                id: order_id
            }
        });
        return removedOrder;
    }
}
exports.RemoveOrderService = RemoveOrderService;
//# sourceMappingURL=RemoveOrderService.js.map