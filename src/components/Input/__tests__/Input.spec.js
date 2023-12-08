import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../Input';


describe('Input Component', () => {
  it('should render correctly with a label and placeholder', () => {
    render(<Input label="Test" placeholder="Enter your test" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your test')).toBeInTheDocument();
  });

  it('should call onChange callback when the input value changes', () => {
      const mockOnChange = jest.fn();
      
      render(<Input label="Test" placeholder="Enter your test" onChange={mockOnChange} />);
      
    const input = screen.getByPlaceholderText('Enter your test')
    
    fireEvent.change(input, {
      target: { value: 'newTest' },
    });

    expect(input.value).toBe('newTest')
  });
});