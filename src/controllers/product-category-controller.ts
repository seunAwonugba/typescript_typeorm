import { ProductCategory } from "../entities/ProductCategory";
import { Request, Response } from "express";

class ProductCategoryController {
    async store(req: Request, res: Response) {
        const name = req.body;
        const productCategory = new ProductCategory();

        productCategory.name = name;

        await productCategory.save();

        return res.status(201).json({
            success: true,
            data: productCategory,
        });
    }
}

export default new ProductCategoryController();
