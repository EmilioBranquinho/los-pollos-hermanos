"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryService = void 0;
const prisma_1 = require("../../lib/prisma");
class ListCategoryService {
    async execute() {
        const categories = await prisma_1.prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        });
        return categories;
    }
}
exports.ListCategoryService = ListCategoryService;
//# sourceMappingURL=ListCategoryService.js.map