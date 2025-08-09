import { render, screen } from "@testing-library/react";
import ItemList from "../components/ItemList";

describe("ItemList Component", () => {
  it("should render the correct number of items", () => {
    const items = [
      { id: 1, title: "Item 1", price: 100, description: "Description 1", image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 200, description: "Description 2", image: "image2.jpg" },
    ];

    render(<ItemList items={items} />);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(items.length);
  });

  it("should display the correct details for each item", () => {
    const items = [
      { id: 1, title: "Item 1", price: 100, description: "Description 1", image: "image1.jpg" },
    ];

    render(<ItemList items={items} />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("- ₹100")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByAltText("Mens wear")).toHaveAttribute("src", "image1.jpg");
  });

  it("should display default price if price is not provided", () => {
    const items = [
      { id: 1, title: "Item 1", defaultPrice: 150, description: "Description 1", image: "image1.jpg" },
    ];

    render(<ItemList items={items} />);

    expect(screen.getByText("- ₹150")).toBeInTheDocument();
  });

  it("should render nothing if items array is empty", () => {
    const items = [];

    render(<ItemList items={items} />);

    const foodItems = screen.queryByTestId("foodItems");
    expect(foodItems).not.toBeInTheDocument();
  });
});