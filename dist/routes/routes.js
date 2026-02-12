"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUserController_js_1 = require("../controllers/user/createUserController.js");
const AuthUserController_js_1 = require("../controllers/user/AuthUserController.js");
const DetailUserController_js_1 = require("../controllers/user/DetailUserController.js");
const isAuthenticated_js_1 = require("../middlewares/isAuthenticated.js");
const CreateCategoryController_js_1 = require("../controllers/category/CreateCategoryController.js");
const ListCategoryController_js_1 = require("../controllers/category/ListCategoryController.js");
const CreateProductController_js_1 = require("../controllers/product/CreateProductController.js");
const multer_js_1 = __importDefault(require("../config/multer.js"));
const multer_1 = __importDefault(require("multer"));
const ListByCategoryController_js_1 = require("../controllers/product/ListByCategoryController.js");
const CreateOrderController_js_1 = require("../controllers/order/CreateOrderController.js");
const RemoveOrderController_js_1 = require("../controllers/order/RemoveOrderController.js");
const AddItemController_js_1 = require("../controllers/order/AddItemController.js");
const RemoveItemController_js_1 = require("../controllers/order/RemoveItemController.js");
const SendOrderController_js_1 = require("../controllers/order/SendOrderController.js");
const ListOrderController_js_1 = require("../controllers/order/ListOrderController.js");
const DetailOrderController_js_1 = require("../controllers/order/DetailOrderController.js");
const FinishOrderController_js_1 = require("../controllers/order/FinishOrderController.js");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_js_1.default.upload("./tmp"));
//Rotas user
router.post("/users", new createUserController_js_1.CreateUserController().handle);
router.post("/session", new AuthUserController_js_1.AuthUserController().handle);
router.get("/me", isAuthenticated_js_1.isAutenticated, new DetailUserController_js_1.DetailUserController().handle);
//rotas category
router.post("/category", isAuthenticated_js_1.isAutenticated, new CreateCategoryController_js_1.CreateCategoryController().handle);
router.get("/category", isAuthenticated_js_1.isAutenticated, new ListCategoryController_js_1.ListCategoryController().handle);
//rotas product
router.post("/product", isAuthenticated_js_1.isAutenticated, upload.single('file'), new CreateProductController_js_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_js_1.isAutenticated, new ListByCategoryController_js_1.ListByCategoryController().handle);
//rotas order
router.post("/order", isAuthenticated_js_1.isAutenticated, new CreateOrderController_js_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_js_1.isAutenticated, new RemoveOrderController_js_1.RemoveOrderController().handle);
router.post("/order/add", isAuthenticated_js_1.isAutenticated, new AddItemController_js_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticated_js_1.isAutenticated, new RemoveItemController_js_1.RemoveItemController().handle);
router.put("/order/send", isAuthenticated_js_1.isAutenticated, new SendOrderController_js_1.SendOrderController().handle);
router.get("/orders", isAuthenticated_js_1.isAutenticated, new ListOrderController_js_1.ListOrderController().handle);
router.get("/order/detail", isAuthenticated_js_1.isAutenticated, new DetailOrderController_js_1.DetailOrderController().handle);
router.put("/order/finish", isAuthenticated_js_1.isAutenticated, new FinishOrderController_js_1.FinishOrderController().handle);
//# sourceMappingURL=routes.js.map