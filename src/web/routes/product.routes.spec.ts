import { app, sequelize } from "../express/express";
import request from "supertest"

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  })

  it("Should create a product", async () => {
    const product = {
      id: "1",
      name: "Product 1",
      cost: 100,
    }
    const productExpected = {
      id: "1",
      name: "Product 1",
      cost: 100,
      salesPrice: 300,
    }
    const response = await request(app).post("/products").send(product);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(productExpected);
  });
});