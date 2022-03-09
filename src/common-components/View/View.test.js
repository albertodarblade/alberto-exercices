import { render, screen } from "@testing-library/react";
import View from ".";

test("Should render a loading state when loading prop is true", () => {
  render(<View loading />);
  const loadingElement = screen.getByText(/...loading view/i);
  expect(loadingElement).toBeInTheDocument();
});

test("Should render a children element when loading prop is false", () => {
  render(<View loading={false}> children render </View>);
  const loadingElement = screen.getByText(/children render/i);
  expect(loadingElement).toBeInTheDocument();
});
