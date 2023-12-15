import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Test cases of Header", () => {
  test("Login button should load", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:'Login'});

    expect(loginButton).toBeInTheDocument()
  });

  it('Card Items should be 0',()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)

    const cardItems=screen.getByText('Cart-(0 Items)');

    expect(cardItems).toBeInTheDocument()
  })
  it('Card is there in it or not',()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)

    const cardItems=screen.getByText(/Cart/);

    expect(cardItems).toBeInTheDocument()
  })
  it('Logout button on click of login',()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)

    const loginButton=screen.getByRole('button');
    fireEvent.click(loginButton);

    const logOutButton=screen.getByRole("button",{name:'Logout'});

    expect(logOutButton).toBeInTheDocument()
  })
});
