"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = require("../../lib/prisma");
class CreateProductService {
    async execute({ name, price, description, banner, category_id }) {
        const ExistingProduct = await prisma_1.prisma.product.findFirst({
            where: {
                name: name
            }
        });
        if (ExistingProduct) {
            throw new Error("Product already exists");
        }
        const product = await prisma_1.prisma.product.create({
            data: {
                name: name,
                price: Number(price),
                description: description,
                banner: banner,
                categoryId: category_id
            }
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
//# sourceMappingURL=CreateProductService.js.map