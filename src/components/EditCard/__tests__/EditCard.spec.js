import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditCard from '../EditCard'; 

describe('EditCard Component', () => {

  it('should render the EditCard with correct title and inputs', () => {
    render(
      <EditCard
        title="Edit Card Title"
        placeholder1="Placeholder 1"
        placeholder2="Placeholder 2"
        placeholder3="Placeholder 3"
        placeholder4="Placeholder 4"
        placeholder5="Placeholder 5"
        placeholder6="Placeholder 6"
        label1="Label 1"
        label2="Label 2"
        label3="Label 3"
        label4="Label 4"
        label5="Label 5"
        label6="Label 6"
        type1="text"
        type2="text"
        type3="text"
        type4="text"
        type5="text"
        type6="text"
        name1="name1"
        name2="name2"
        name3="name3"
        name4="name4"
        name5="name5"
        name6="name6"
        handleCloseModal={() => {}}
        onChange={() => {}}
        submit={() => {}}
      />
    );

    // Verifica se o título está presente
    expect(screen.getByText('Edit Card Title')).toBeInTheDocument();

    // Verifica se os inputs estão presentes
    expect(screen.getByPlaceholderText('Placeholder 1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder 2')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder 3')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder 4')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder 5')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder 6')).toBeInTheDocument();
  });

  it('should call handleCloseModal when close icon is clicked', () => {
    const mockHandleCloseModal = jest.fn();

    render(
      <EditCard
        title="Edit Card Title"
        placeholder1="Placeholder 1"
        label1="Label 1"
        type1="text"
        name1="name1"
        handleCloseModal={mockHandleCloseModal}
        onChange={() => {}}
        submit={() => {}}
      />
    );

    // Simula o clique no ícone de fechar
    fireEvent.click(screen.getByAltText('x image'));

    // Verifica se a função handleCloseModal foi chamada
    expect(mockHandleCloseModal).toHaveBeenCalled();
  });

  it('should call submit function when "Salvar" button is clicked', () => {
    const mockSubmit = jest.fn();

    render(
      <EditCard
        title="Edit Card Title"
        placeholder1="Placeholder 1"
        label1="Label 1"
        type1="text"
        name1="name1"
        handleCloseModal={() => {}}
        onChange={() => {}}
        submit={mockSubmit}
      />
    );

    // Simula o clique no botão "Salvar"
    fireEvent.click(screen.getByText('Salvar'));

    // Verifica se a função submit foi chamada
    expect(mockSubmit).toHaveBeenCalled();
  });
});