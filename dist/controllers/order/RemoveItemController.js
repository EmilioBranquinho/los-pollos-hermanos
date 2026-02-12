"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemController = void 0;
const RemoveItemService_js_1 = require("../../services/order/RemoveItemService.js");
class RemoveItemController {
    async handle(req, res) {
        const { item_id } = req.query;
        if (typeof item_id !== "string") {
            return res.status(400).json({
                error: "item_id is required and must be a string"
            });
        }
        const removeItem = new RemoveItemService_js_1.RemoveItemService();
        const removedItem = await removeItem.execute({ item_id });
        return res.json(removedItem);
    }
}
exports.RemoveItemController = RemoveItemController;
//# sourceMappingURL=RemoveItemController.js.map