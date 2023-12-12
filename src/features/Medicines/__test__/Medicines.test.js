import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MedicinesScreen } from '../Medicines'

describe('MedicinesScreen component', () => {
    it('renders MedicinesScreen component', async () => {
        const { getByText } = render(
            <Router>
                <MedicinesScreen />
            </Router>
        );

        // Verifica se os elementos iniciais estão presentes
        expect(getByText('Medicamentos')).toBeInTheDocument();
        expect(getByText('Adicionar Medicamento')).toBeInTheDocument();
        expect(getByText('Nome')).toBeInTheDocument();
        expect(getByText('Descrição')).toBeInTheDocument();
        expect(getByText('Validade')).toBeInTheDocument();
        expect(getByText('Status')).toBeInTheDocument();

    });
});