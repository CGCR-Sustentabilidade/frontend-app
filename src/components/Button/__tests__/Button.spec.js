import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

test('renders Button component', () => {
  const { getByText } = render(<Button title="Click me" type='submit' id='Form' onClick={undefined} icon={undefined} />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick function when button is clicked', () => {''
  const onClickMock = jest.fn();
  const { getByText } = render(<Button title="Click me" onClick={onClickMock} type={undefined} id={undefined} icon={undefined} />);
  const buttonElement = screen.getByText('Click me');
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test('renders icon correctly', () => {
  const { getByTestId } = render(<Button title="Click me" icon="icon.png" type={undefined} id={undefined} onClick={undefined} />);
  const iconElement = screen.getByTestId('icon');
  expect(iconElement).toHaveAttribute('src', 'icon.png');
});
