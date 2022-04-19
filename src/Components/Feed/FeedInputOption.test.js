import { render, screen } from "@testing-library/react"
import Feed from "./Feed";

describe("<FeedInputOption />", () => {
  test("Renders an input option", () => {
    render(<Feed />);
    const inputOption = screen.queryAllByTestId("inputOption")[0];
    const inputOptionTitle = screen.queryAllByTestId("inputOption-title")[0];
    const inputOptionIcon = screen.queryAllByTestId("inputOptionIcon")[0];

    expect(inputOption).toBeInTheDocument();
    expect(inputOptionTitle).toBeInTheDocument();
    expect(inputOptionIcon).toBeInTheDocument();
  })
})