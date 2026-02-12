"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishOrderService = void 0;
const prisma_1 = require("../../lib/prisma");
class FinishOrderService {
    async execute({ order_id }) {
        const finishedOrder = await prisma_1.prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });
        return finishedOrder;
    }
}
exports.FinishOrderService = FinishOrderService;
//# sourceMappingURL=FinishOrderService.js.map