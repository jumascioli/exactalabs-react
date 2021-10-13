import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from '.';

const tasks = [
  {
    id: "123456",
    title: "Teste tasks",
  },
];

describe("<List />", () => {

  it("should render correctly", () => {
    const { container } = render(<List tasks={tasks} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render item", () => {
    render(<List tasks={tasks} />);

    const item = screen.getByText(/Teste tasks/i);

    expect(item).toBeInTheDocument();
  });

  it("should call onDelete", () => {
    const handleDelete = jest.fn(); 

    render(<List tasks={tasks} onDelete={handleDelete} />);

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(handleDelete).toBeCalledWith("123456");
  });

  it("should render empty", () => {
    render(<List tasks={[]} />);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});