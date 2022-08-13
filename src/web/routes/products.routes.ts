import express, { Request, Response } from "express";
import ProductRepository from "../../database/product.repository";
import CreateProductUsecase from "../../usecases/create-product/create-product.usecase";

export const productRouter = express.Router();

productRouter.post("/", async (req: Request, res: Response) => {
  const createProductUsecase = new CreateProductUsecase(
    new ProductRepository(),
  );

  try {
    const productDto = {
      id: req.body.id,
      name: req.body.name,
      cost: req.body.cost,
    }
    const output = await createProductUsecase.execute(productDto);
    res.status(201).send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});
