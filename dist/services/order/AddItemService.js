"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemService = void 0;
const prisma_1 = require("../../lib/prisma");
class AddItemService {
    async execute({ amount, orderId, productId }) {
        const item = await prisma_1.prisma.orderItem.create({
            data: {
                amount: amount,
                orderId: orderId,
                productId: productId
            }
        });
        return item;
    }
}
exports.AddItemService = AddItemService;
//# sourceMappingURL=AddItemService.js.map