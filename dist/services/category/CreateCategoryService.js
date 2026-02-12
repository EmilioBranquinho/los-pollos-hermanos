"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = require("../../lib/prisma");
class CreateCategoryService {
    async execute(name) {
        if (!name) {
            console.log("sem nome");
            throw new Error("Error, name is mandatory!");
        }
        const existingCategory = await prisma_1.prisma.category.findFirst({
            where: {
                name: name
            }
        });
        if (existingCategory) {
            throw new Error("Error, category already exists!");
        }
        const category = await prisma_1.prisma.category.create({
            data: {
                name: name
            }
        });
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
//# sourceMappingURL=CreateCategoryService.js.map