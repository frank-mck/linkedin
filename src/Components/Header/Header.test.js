import { render, screen } from "@testing-library/react"
import Header from "./Header";

describe('<Header />', () => {
  test('renders a header component', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const headerLeft = screen.getByTestId('headerLeft');
    const headerRight = screen.getByTestId('headerRight');
    const headerInput = screen.getByTestId('headerInput');

    expect(header).toBeInTheDocument();
    expect(headerLeft).toBeInTheDocument();
    expect(headerRight).toBeInTheDocument();
    expect(headerInput).toBeInTheDocument();
  });

  test('renders the header icons and titles', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const SearchIcon = screen.getByTestId('SearchIcon');
    const HomeIcon = screen.getByTestId('HomeIcon');
    const SupervisorAccountIcon = screen.getByTestId('SupervisorAccountIcon');
    const BusinessCenterIcon = screen.getByTestId('BusinessCenterIcon');
    const NotificationsIcon = screen.getByTestId('NotificationsIcon');

    const home = screen.getByText(/Home/i);
    const myNetwork = screen.getByText(/My Network/i);
    const jobs = screen.getByText(/Jobs/i);
    const notifications = screen.getByText(/Notification/i);
    const me = screen.getAllByText(/me/i);

    expect(SearchIcon).toBeInTheDocument();
    expect(HomeIcon).toBeInTheDocument();
    expect(SupervisorAccountIcon).toBeInTheDocument();
    expect(BusinessCenterIcon).toBeInTheDocument();
    expect(NotificationsIcon).toBeInTheDocument();

    expect(home).toBeInTheDocument();
    expect(myNetwork).toBeInTheDocument();
    expect(jobs).toBeInTheDocument();
    expect(notifications).toBeInTheDocument();
    expect(header).toContainHTML('me');
  })
})
