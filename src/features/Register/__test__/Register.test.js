import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Register from '../Register';

describe('Register component', () => {
    // Teste de renderização inicial
    it('renders Register component', () => {
        const { getByText } = render(<Register />);

        expect(getByText('CGCR')).toBeInTheDocument();
        expect(getByText('Registro')).toBeInTheDocument();
        expect(getByText('Preencha os campos abaixo para criar uma conta.')).toBeInTheDocument();
        expect(getByText('E-mail:')).toBeInTheDocument();
        expect(getByText('Confirme o E-mail:')).toBeInTheDocument();
        expect(getByText('Registrar')).toBeInTheDocument();
        expect(getByText('Senha:')).toBeInTheDocument();
    });

    // Teste de entrada de dados
    it('handles input change', () => {
        const { getByPlaceholderText } = render(<Register />);

        fireEvent.change(getByPlaceholderText('Digite seu e-mail'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Confirme seu e-mail'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Digite sua senha'), { target: { value: 'password123' } });

        expect(getByPlaceholderText('Digite seu e-mail').value).toBe('test@example.com');
        expect(getByPlaceholderText('Confirme seu e-mail').value).toBe('test@example.com');
        expect(getByPlaceholderText('Digite sua senha').value).toBe('password123');
    });

    // Teste de validação de formulário
    it('validates form fields', async () => {
        const { getByText } = render(<Register />);

        fireEvent.click(getByText('Registrar'));

        await waitFor(() => {
            expect(getByText(/Campo de senha é obrigatório/i)).toBeInTheDocument();
            expect(getByText(/Campo de e-mail é obrigatório/i)).toBeInTheDocument();
        })

    });
});