"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const createUserService_js_1 = require("../../services/user/createUserService.js");
class CreateUserController {
    async handle(req, res) {
        const { email, name, password } = req.body;
        const createUserService = new createUserService_js_1.CreateUserService();
        const user = await createUserService.execute({
            name,
            email,
            password
        });
        return res.json(user);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=createUserController.js.map