import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import Header from "../components/Header";
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore();

describe("Header Component", () => {
    it("should render the header with the correct title", () => {
        render(
            <BrowserRouter>
                <Provider store={mockStore({ cart: { items: [] } })}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText("Shopping cart")).toBeInTheDocument();
    });

    it("should display the cart link with the correct item count when the cart is empty", () => {
        render(
            <BrowserRouter>
                <Provider store={mockStore({ cart: { items: [] } })}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText("🛒Cart(0)")).toBeInTheDocument();
    });

    it("should display the cart link with the correct item count when the cart has items", () => {
        render(
            <BrowserRouter>
                <Provider store={mockStore({ cart: { items: [{ id: 1 }, { id: 2 }] } })}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText("🛒Cart(2)")).toBeInTheDocument();
    });

    it("should have a link to the cart page", () => {
        render(
            <BrowserRouter>
                <Provider store={mockStore({ cart: { items: [] } })}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartLink = screen.getByText("🛒Cart(0)");
        const link = screen.getByRole("link", { name: /🛒Cart\(0\)/i });
        expect(link).toHaveAttribute("href", "/cart");
    });
});