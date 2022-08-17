import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create category", () => {
  // it("should be able to create a new category", () => {
  //   const createCategory = new CreateCategoryUseCase();
  // });

  it("Should 2 + 2 don't be 5", () => {
    const sum = 2 + 2;
    const result = 5;

    expect(sum).not.toBe(result);
  });
});
