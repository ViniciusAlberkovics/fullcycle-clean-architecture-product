import CreateProductUsecase from "./create-product.usecase";

describe("create product usecase unit test", () => {
  it("Should create a product", async () => {
    const input = {
      id: "abc",
      name: "iPhone",
      cost: 100,
    }
    const output = {
      id: "abc",
      name: "iPhone",
      cost: 100,
      salesPrice: 300,
    }
    const productGateway = () => {
      return {
        create: jest.fn(),
      }
    }
    const createProductUsecase = new CreateProductUsecase(productGateway());
    const result = await createProductUsecase.execute(input);
    expect(result).toEqual(output);
  });
});