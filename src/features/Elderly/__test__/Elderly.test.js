import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ElderlyScreen } from '../Elderly'

describe('ElderlyScreen component', () => {
    it('renders ElderlyScreen component', async () => {
        const { getByText } = render(
            <Router>
                <ElderlyScreen />
            </Router>
        );

        // Verifica se os elementos iniciais estão presentes
        expect(getByText('Nome')).toBeInTheDocument();
        expect(getByText('Descrição')).toBeInTheDocument();
        expect(getByText('Data')).toBeInTheDocument();
        expect(getByText('Tipo')).toBeInTheDocument();
        expect(getByText('Status')).toBeInTheDocument();

    });
});