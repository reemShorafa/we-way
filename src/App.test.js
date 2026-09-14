import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/RealGlobeMap', () => function RealGlobeMapMock() {
  return <div aria-label="WeWay trip map" />;
});

test('renders the WeWay landing page', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getAllByText(/WeWay/i).length).toBeGreaterThan(0);
});
