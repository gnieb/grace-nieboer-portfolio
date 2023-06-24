import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import FirstTest from '../components/FirstTest';
import Home from '../components/Home';


test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})

test("Connect with me button", async () => {
    const mockHandleClick = jest.fn();
    render(< Home />);

    const connectButton = screen.getByRole('button', { name: /connect/i });
    expect(connectButton).toHaveBeenCalled();
})