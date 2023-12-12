import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );

  // Verifica se o componente SideBar está presente
  expect(getByText('CGCR')).toBeInTheDocument();
});