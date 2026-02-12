"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryService = void 0;
const prisma_1 = require("../../lib/prisma");
class ListByCategoryService {
    async execute(categoryId) {
        const products = await prisma_1.prisma.product.findMany({
            where: {
                categoryId: categoryId
            }
        });
        return products;
    }
}
exports.ListByCategoryService = ListByCategoryService;
//# sourceMappingURL=ListByCategoryService.js.map