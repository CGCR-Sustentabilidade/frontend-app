import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductsScreen } from '../Products';

describe('ProductsScreen component', () => {
    it('renders ProductsScreen component', async () => {
        const { getByText } = render(
            <Router>
                <ProductsScreen />
            </Router>
        );

        // Verifica se os elementos iniciais estão presentes
        expect(getByText('Produtos')).toBeInTheDocument();
        expect(getByText('Adicionar Produto')).toBeInTheDocument();
        expect(getByText('Nome')).toBeInTheDocument();
        expect(getByText('Marca')).toBeInTheDocument();
        expect(getByText('Descrição')).toBeInTheDocument();
        expect(getByText('Data de validade')).toBeInTheDocument();
        expect(getByText('Status')).toBeInTheDocument();
    });
});