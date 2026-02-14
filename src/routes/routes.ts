import { Router } from "express";
import { CreateUserController } from "../controllers/user/createUserController.js";
import { AuthUserController } from "../controllers/user/AuthUserController.js";
import { DetailUserController } from "../controllers/user/DetailUserController.js";
import { isAutenticated } from "../middlewares/isAuthenticated.js";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController.js";
import { ListCategoryController } from "../controllers/category/ListCategoryController.js";
import { CreateProductController } from "../controllers/product/CreateProductController.js";
import uploadConfig from '../config/multer.js';
import multer from "multer";
import { ListByCategoryController } from "../controllers/product/ListByCategoryController.js";
import { CreateOrderController } from "../controllers/order/CreateOrderController.js";
import { RemoveOrderController } from "../controllers/order/RemoveOrderController.js";
import { AddItemController } from "../controllers/order/AddItemController.js";
import { RemoveItemController } from "../controllers/order/RemoveItemController.js";
import { SendOrderController } from "../controllers/order/SendOrderController.js";
import { ListOrderController } from "../controllers/order/ListOrderController.js";
import { DetailOrderController } from "../controllers/order/DetailOrderController.js";
import { FinishOrderController } from "../controllers/order/FinishOrderController.js";
import { DeleteCategoryController } from "../controllers/category/DeleteCategoryController.js";
import { ListAllProductsController } from "../controllers/product/ListAllProductsController.js";
import { DeleteProductController } from "../controllers/product/DeleteProductController.js";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

//Rotas user
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAutenticated, new DetailUserController().handle);

//rotas category
router.post("/category", isAutenticated, new CreateCategoryController().handle);

router.get("/category", isAutenticated, new ListCategoryController().handle);

router.delete("/category/remove", isAutenticated, new DeleteCategoryController().handle)

//rotas product
router.post("/product", isAutenticated, upload.single('file'), new CreateProductController().handle);

router.get("/category/product", isAutenticated, new ListByCategoryController().handle)

router.get("/products", isAutenticated, new ListAllProductsController().handle)

router.delete("/product/remove", isAutenticated, new DeleteProductController().handle)

//rotas order
router.post("/order", isAutenticated, new CreateOrderController().handle);

router.delete("/order", isAutenticated, new RemoveOrderController().handle);

router.post("/order/add", isAutenticated, new AddItemController().handle);

router.delete("/order/remove", isAutenticated, new RemoveItemController().handle);

router.put("/order/send", isAutenticated, new SendOrderController().handle);

router.get("/orders", isAutenticated, new ListOrderController().handle);

router.get("/order/detail", isAutenticated, new DetailOrderController().handle);

router.put("/order/finish", isAutenticated, new FinishOrderController().handle);

export { router };