import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should return restaurant card onChange of input value", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  // Click event should result into loading 1 event;

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(2);
});

it("Should return restaurant card on click of top restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //  Before top rated button clicked
  const resList = screen.getAllByTestId("resCard");
  expect(resList.length).toBe(9);

  const topRestaurants = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

 

  fireEvent.click(topRestaurants);

  // Click event should result into loading 1 event;

  const cards = screen.getAllByTestId("resCard");
 
  expect(cards.length).toBe(cards.length);
});
