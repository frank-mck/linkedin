import { render, screen } from "@testing-library/react"
import HeaderOption from "./HeaderOption";

describe('<HeaderOption />', () => {
  test('renders a header option', () => {
    render(<HeaderOption />);
    const headerOption = screen.getByTestId('headerOption');
    expect(headerOption).toBeInTheDocument();
  });

  test('renders a header option title', () => {
    render(<HeaderOption />);
    const headerOptionTitle = screen.getByTestId('headerOptionTitle');
    expect(headerOptionTitle).toBeInTheDocument();
  });
})
