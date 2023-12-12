import React from 'react';
import { render, fireEvent, waitFor, getByPlaceholderText } from '@testing-library/react';
import Login from '../Login';

describe('Login component', () => {
  // Teste de renderização inicial
  it('renders Login component', () => {
    const { getByText } = render(<Login />);

    expect(getByText('CGCR')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Digite seu usuário e senha para acessar sua conta.')).toBeInTheDocument();
    expect(getByText('E-mail:')).toBeInTheDocument();
    expect(getByText('Senha:')).toBeInTheDocument();
    expect(getByText('Entrar')).toBeInTheDocument();
    expect(getByText('Esqueceu sua senha?')).toBeInTheDocument();
  });

  // Teste de entrada de dados
  it('handles input change', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    fireEvent.change(getByPlaceholderText('Digite seu e-mail'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Digite sua senha'), { target: { value: 'password123' } });

    expect(getByPlaceholderText('Digite seu e-mail').value).toBe('test@example.com');
    expect(getByPlaceholderText('Digite sua senha').value).toBe('password123');
  });

  // Teste de validação de formulário
  it('validates form fields', async () => {
    const { getByText } = render(<Login />);
    
    fireEvent.click(getByText('Entrar'));

    await waitFor(() => {
      expect(getByText('Campo de email é obrigatório')).toBeInTheDocument();
      expect(getByText('Campo de senha é obrigatório')).toBeInTheDocument();
    });
  });

  // Teste de link de redefinição de senha
  it('renders password reset link', () => {
    const { getByText } = render(<Login />);
    expect(getByText('Redefinir senha')).toHaveAttribute('href', '');
  });
});