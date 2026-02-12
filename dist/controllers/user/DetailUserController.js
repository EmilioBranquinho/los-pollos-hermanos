"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserController = void 0;
const DetailUserService_js_1 = require("../../services/user/DetailUserService.js");
class DetailUserController {
    async handle(req, res) {
        const user_id = req.user_id;
        const detailUserService = new DetailUserService_js_1.DetailUserService();
        const userDetail = await detailUserService.execute(user_id);
        return res.json(userDetail);
    }
}
exports.DetailUserController = DetailUserController;
//# sourceMappingURL=DetailUserController.js.map