import { fireEvent, render, screen } from "@testing-library/react";
import ShoppingCard from "../components/ShoppingCard";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("ShoppingCard Component", () => {
  const mockDispatch = jest.fn();
  const mockResData = {
    id: 1,
    title: "Test Item",
    description: "This is a test item",
    price: 100,
    image: "test-image.jpg",
  };

  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
  }));

  it("should render the ShoppingCard with correct details", () => {
    const store = mockStore({});
    render(<Provider store={store}>
        <ShoppingCard resData={mockResData} />
      </Provider>);

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("This is a test item")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByAltText("res-logo")).toHaveAttribute("src", "test-image.jpg");
  });

  it("should call addToCart when 'Add to cart' button is clicked", () => {
    const store = mockStore({});
    render(<Provider store={store}>
        <ShoppingCard resData={mockResData} />
      </Provider>);

    const addToCartButton = screen.getByText("Add to cart");
    fireEvent.click(addToCartButton);

   
  });
});