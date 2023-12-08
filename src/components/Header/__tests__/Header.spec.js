import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

const headerComponent = () => {
    render(
        <Header
          headerTitle="Header Title"
          textButton="Open Modal"
        />
      );
}

describe('Header Component', () => {
  it('should render the header with title and button', () => {
    headerComponent();    

    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.getByText('Open Modal')).toBeInTheDocument();
  });

  it('should open the modal when the button is clicked', () => {
    headerComponent();

    // Verifica se o modal não está presente inicialmente
    expect(screen.queryByText('Salvar')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Open Modal'));

    // Verifica se o modal está presente após o clique
    expect(screen.getByText('Salvar')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    render(
      <Header
        headerTitle="Header Title"
        textButton="Open Modal"
        // Adicione outros props necessários para o teste
      />
    );

    // Abre o modal
    fireEvent.click(screen.getByText('Open Modal')); 

    // Verifica se o modal está presente após o clique
    expect(screen.getByText('Salvar')).toBeInTheDocument();

    //fecha o modal
    fireEvent.click(screen.getByAltText('x image')); 
  
    // Verifica se o modal está fechado
    expect(screen.queryByText('EditCard Title')).not.toBeInTheDocument();

  });

});