import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Input from '.';

describe("<Input />", () => {

  it("should render correctly", () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });
  
  it("should", () => {
    render(
      <label>
        Nome
        <Input value="Test value" onChange={() => {}}/>
      </label>
    );

    const input = screen.getByLabelText(/nome/i);

    expect(input).toHaveValue("Test value");
  });

  it("should call onChange", () => {
    const handleChange = jest.fn();

    render(<Input value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    userEvent.type(input, "test");

    expect(handleChange).toBeCalledTimes(4);
  });

  it("should change input value", () => {
    let value = "";

    const handleChange = (event) => {
      value = value + event.target.value;
    };

    const { rerender } = render(
      <Input value={value} onChange={handleChange} />
    );

    const input = screen.getByRole("textbox");

    userEvent.type(input, "test");

    rerender(<Input value={value} onChange={handleChange} />);

    expect(input).toHaveValue("test");
  });

  it("should change input value 2", () => {
    function Test() {
      const [value, setValue] = useState();

      return (
        <Input 
          value={value} 
          onChange={(event) => setValue(event.target.value)} 
        />
      );
    }

    render(<Test />);

    const input = screen.getByRole("textbox");

    userEvent.type(input, "testando");

    expect(input).toHaveValue("testando");
  });
});