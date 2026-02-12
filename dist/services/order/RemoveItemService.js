"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemService = void 0;
const prisma_1 = require("../../lib/prisma");
class RemoveItemService {
    async execute({ item_id }) {
        const removedItem = await prisma_1.prisma.orderItem.delete({
            where: {
                id: item_id
            }
        });
        return removedItem;
    }
}
exports.RemoveItemService = RemoveItemService;
//# sourceMappingURL=RemoveItemService.js.map