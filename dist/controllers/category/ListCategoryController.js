"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryController = void 0;
const ListCategoryService_js_1 = require("../../services/category/ListCategoryService.js");
class ListCategoryController {
    async handle(req, res) {
        const listCategoryService = new ListCategoryService_js_1.ListCategoryService();
        const categories = await listCategoryService.execute();
        return res.json(categories);
    }
}
exports.ListCategoryController = ListCategoryController;
//# sourceMappingURL=ListCategoryController.js.map