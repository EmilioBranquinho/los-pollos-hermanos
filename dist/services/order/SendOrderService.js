"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderService = void 0;
const prisma_1 = require("../../lib/prisma");
class SendOrderService {
    async execute({ order_id }) {
        const finishedOrder = await prisma_1.prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false,
                status: false
            }
        });
        return finishedOrder;
    }
}
exports.SendOrderService = SendOrderService;
//# sourceMappingURL=SendOrderService.js.map