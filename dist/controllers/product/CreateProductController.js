"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_js_1 = require("../../services/product/CreateProductService.js");
class CreateProductController {
    async handle(req, res) {
        const { name, price, description, category_id } = req.body;
        if (!req.file) {
            throw new Error("Error, upload a file");
        }
        console.log(req.body);
        console.log(req.file);
        const { filename } = req.file;
        const createProductService = new CreateProductService_js_1.CreateProductService();
        const product = await createProductService.execute({
            name,
            price,
            description,
            category_id,
            banner: filename
        });
        return res.json(product);
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map