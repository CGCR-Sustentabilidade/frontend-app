import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home'

describe('Home component', () => {
    it('renders Home component', async () => {
        const { getByText } = render(
            <Router>
                <Home />
            </Router>
        );

        // Verifica se os elementos iniciais estão presentes
        expect(getByText('Idosos')).toBeInTheDocument();
        expect(getByText('Medicamentos')).toBeInTheDocument();
        expect(getByText('Produtos')).toBeInTheDocument();

    });
});