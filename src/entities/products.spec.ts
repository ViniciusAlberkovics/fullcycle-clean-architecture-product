import Product from "./products";

describe("product unit test", () => {
  it("Should have an ID", () => {
    const product = new Product("a", "Product 1");
    expect(product.id).toBeDefined();
  })

  it("Should have a name", () => {
    const product = new Product("a", "Product 1");
    expect(product.name).toBe("Product 1");
  });

  it("Should throw an error if cost is negative", () => {
    const product = new Product("a", "Product 1");
    expect(() => {
      product.cost = -1;
    }).toThrowError("Cost cannot be negative")
  });

  it("Should set the cost of a product", () => {
    const product = new Product("a", "iPhone");
    product.cost = 100;
    expect(product.cost).toBe(100);
  });

  it("Should set the salesPrice by 3 times the cost of the product", () => {
    const product = new Product("a", "iPhone");
    product.cost = 100;
    expect(product.salesPrice).toBe(300);
  });
});