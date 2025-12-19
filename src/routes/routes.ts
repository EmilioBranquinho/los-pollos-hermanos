import { Router } from "express";
import { CreateUserController } from "../controllers/user/createUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAutenticated } from "../middlewares/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryService } from "../services/category/ListCategoryService";
import { ListCategoryController } from "../controllers/category/ListCategoryController";

const router = Router();

//Rotas user
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAutenticated, new DetailUserController().handle);

//rotas category
router.post("/category", isAutenticated, new CreateCategoryController().handle);

router.get("/category", isAutenticated, new ListCategoryController().handle)

export { router };