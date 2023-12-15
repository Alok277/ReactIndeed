import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us test cases", () => {

  beforeAll(()=>{
    console.log("Before All")
  });

  beforeEach(()=>{
    console.log("Before Each")
  });

  afterAll(()=>{
    console.log("After All")
  });
  
  afterEach(()=>{
    console.log("After each")
  })
  // test is same as it and both are function
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button by placeholder", () => {
    render(<Contact />);

    const placeHolderName = screen.getByPlaceholderText("name");
    //Assertion
    expect(placeHolderName).toBeInTheDocument();
  });

  test("Should load two input in the contact components", () => {
    render(<Contact />);

    // Querying
    const inputField = screen.getAllByRole("textbox");


    // Assertion
    expect(inputField.length).toBe(2);
  });
});
