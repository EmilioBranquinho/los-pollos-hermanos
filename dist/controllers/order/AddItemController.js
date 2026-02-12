"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemController = void 0;
const AddItemService_js_1 = require("../../services/order/AddItemService.js");
class AddItemController {
    async handle(req, res) {
        const { amount, productId, orderId } = req.body;
        const addItem = new AddItemService_js_1.AddItemService();
        const item = await addItem.execute({ amount, productId, orderId });
        return res.json(item);
    }
}
exports.AddItemController = AddItemController;
//# sourceMappingURL=AddItemController.js.map