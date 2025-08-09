import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store"
import Cart from "../components/Cart";


const mockStore = configureMockStore()

describe("Cart Component", () => {
    it("should display 'Cart is Empty' when there are no items in the cart", () => {
        const store = mockStore({
            cart: {
                items: [],
            },
        });

        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText("Cart is Empty")).toBeInTheDocument();
        expect(screen.getByText("Total Items: 0")).toBeInTheDocument();
    });

    it("should display the correct number of items in the cart", () => {
        const store = mockStore({
            cart: {
                items: [
                    { id: 1, name: "Item 1" },
                    { id: 2, name: "Item 2" },
                ],
            },
        });

        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText("Total Items: 2")).toBeInTheDocument();
        expect(screen.queryByText("Cart is Empty")).not.toBeInTheDocument();
    });

    it("should call clearCart action when 'Clear Cart' button is clicked", () => {
        const store = mockStore({
            cart: {
                items: [
                    { id: 1, name: "Item 1" },
                    { id: 2, name: "Item 2" },
                ],
            },
        });

        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const clearCartButton = screen.getByText("Clear Cart");
        fireEvent.click(clearCartButton);

        expect(store.dispatch).toHaveBeenCalledWith({ type: "cart/clearCart" });
    });
});