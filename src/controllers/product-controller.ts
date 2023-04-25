import { Product } from "../entities/Product";
import { Request, Response } from "express";

class ProductController {
    async store(req: Request, res: Response) {
        const { name, price, category } = req.body;
        const product = new Product();

        product.name = name;
        product.price = price;
        product.productCategory = category;

        await product.save();

        return res.status(201).json({
            success: true,
            data: product,
        });
    }
}

export default new ProductController();
