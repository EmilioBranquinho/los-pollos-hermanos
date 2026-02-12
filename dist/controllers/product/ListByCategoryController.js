"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryController = void 0;
const ListByCategoryService_js_1 = require("../../services/product/ListByCategoryService.js");
class ListByCategoryController {
    async handle(req, res) {
        const category_id = req.query.category_id;
        const listByCategoryService = new ListByCategoryService_js_1.ListByCategoryService();
        const products = await listByCategoryService.execute(category_id);
        return res.json(products);
    }
}
exports.ListByCategoryController = ListByCategoryController;
//# sourceMappingURL=ListByCategoryController.js.map