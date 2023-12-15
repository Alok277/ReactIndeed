import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu.js";
import Header from "../Header.js";
import Cart from "../Cart.js";
import resMenuData from "../mocks/resMenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(resMenuData),
  })
);

it("Shoud render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianText = screen.getByText("Whopper(4)");
  fireEvent.click(accordianText);

  const itemsInWhopper = screen.getAllByTestId("foodItems");

  expect(itemsInWhopper.length).toBe(4);

  const addbtns = screen.getAllByRole("button", { name: "Add +" });
  

  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart-(1 Items)")).toBeInTheDocument();
  fireEvent.click(addbtns[1]);
  expect(screen.getByText("Cart-(2 Items)")).toBeInTheDocument();

 
  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  fireEvent.click(screen.getByRole("button",{name:'Clear All'}))
  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
});
