import { getByTestId, render, screen } from "@testing-library/react"
import Header from "./Header";

describe('<Header />', () => {
  test('renders a header component', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const headerLeft = screen.getByTestId('headerLeft');
    const headerRight = screen.getByTestId('headerRight');
    const headerInput = screen.getByTestId('headerInput')

    expect(header).toBeInTheDocument();
    expect(headerLeft).toBeInTheDocument();
    expect(headerRight).toBeInTheDocument();
    expect(headerInput).toBeInTheDocument();
  });

  test('renders the headers icons', () => {
    render(<Header />);
    const SearchIcon = screen.getByTestId('SearchIcon');
    const HomeIcon = screen.getByTestId('HomeIcon');
    const SupervisorAccountIcon = screen.getByTestId('SupervisorAccountIcon');
    const BusinessCenterIcon = screen.getByTestId('BusinessCenterIcon');
    const NotificationsIcon = screen.getByTestId('NotificationsIcon');

    expect(SearchIcon).toBeInTheDocument();
    expect(HomeIcon).toBeInTheDocument();
    expect(SupervisorAccountIcon).toBeInTheDocument();
    expect(BusinessCenterIcon).toBeInTheDocument();
    expect(NotificationsIcon).toBeInTheDocument();
  })
})