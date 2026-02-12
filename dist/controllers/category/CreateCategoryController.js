"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_js_1 = require("../../services/category/CreateCategoryService.js");
class CreateCategoryController {
    async handle(req, res) {
        const { name } = req.body;
        const createCategoryService = new CreateCategoryService_js_1.CreateCategoryService();
        const category = await createCategoryService.execute(name);
        return res.json(category);
    }
}
exports.CreateCategoryController = CreateCategoryController;
//# sourceMappingURL=CreateCategoryController.js.map