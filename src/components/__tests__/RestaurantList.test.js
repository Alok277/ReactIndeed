import { render, screen } from "@testing-library/react";
import RestaurantList from "../RestaurantList";
import {withPromotedRestaurant} from "../RestaurantList";
import mockData from "../mocks/resMocksData.json";
import "@testing-library/jest-dom";

const PromotedRestaurant=withPromotedRestaurant(RestaurantList);

test("Should receive props", () => {
 
  render(<RestaurantList resName={mockData} />);

  const name = screen.getByTestId("restaurant-name");
  expect(name).toBeInTheDocument();
});

test("Should renedered with promoted labels", () => {
  render(<PromotedRestaurant resName={mockData} />);

  const label = screen.getByText("Promoted");
expect(label).toBeInTheDocument();

});
