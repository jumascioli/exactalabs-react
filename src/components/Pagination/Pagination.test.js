import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from '.';

describe("<Pagination />", () => {

  it("should render correctly", () => {
    const { container } = render(<Pagination />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render page number", () => {
    render(<Pagination page={1} />);

    const item = screen.getByText(/página 1/i);

    expect(item).toBeInTheDocument();
  });

  it("should call onPrev onNext", () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn(); 

    render(<Pagination page={5} onPrev={handlePrev} onNext={handleNext} />);

    const buttonNext = screen.getByRole("button", {
      name: ">",
    });

    userEvent.click(buttonNext);

    expect(handleNext).toBeCalled();
    expect(handlePrev).not.toBeCalled();

    const buttonPrev = screen.getByRole("button", {
      name: "<",
    });

    userEvent.click(buttonPrev);

    expect(handlePrev).toBeCalledTimes(1);
    expect(handleNext).toBeCalledTimes(1);
  });
});