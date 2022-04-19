import { render, screen } from "@testing-library/react"
import Feed from "./Feed";

describe("<FeedInputOption />", () => {
  test("Renders an input option", () => {
    render(<Feed />)

    const inputOption = screen.queryAllByTestId("inputOption")[0];
    expect(inputOption).toBeInTheDocument();
  })
})