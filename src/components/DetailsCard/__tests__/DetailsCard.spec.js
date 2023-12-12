import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsCard from '../DetailsCard';

describe('DetailsCard Component', () => {

  const mockData = {
    info1: 'Info1',
    info2: 'Info2',
    info3: 'Info3',
    info4: 'Info4',
    info5: 'Info5',
    info6: 'Info6',
    title: 'Title',
    placeholder1: 'Placeholder1',
    placeholder2: 'Placeholder2',
    placeholder3: 'Placeholder3',
    placeholder4: 'Placeholder4',
    placeholder5: 'Placeholder5',
    placeholder6: 'Placeholder6',
    label1: 'Label1',
    label2: 'Label2',
    label3: 'Label3',
    label4: 'Label4',
    label5: 'Label5',
    label6: 'Label6',
    type1: 'Type1',
    type2: 'Type2',
    type3: 'Type3',
    type4: 'Type4',
    type5: 'Type5',
    type6: 'Type6',
    name1: 'Name1',
    name2: 'Name2',
    name3: 'Name3',
    name4: 'Name4',
    name5: 'Name5',
    name6: 'Name6',
    deleteId: '1'
  }

  it('renderiza o componente com informações corretas', () => {

    render(<DetailsCard {...mockData} />);

    // Verifica se as informações são renderizadas corretamente
    expect(screen.getByText(mockData.info1)).toBeInTheDocument();
    expect(screen.getByText(mockData.info2)).toBeInTheDocument();

    // Verifica se os ícones estão presentes
    expect(screen.getByAltText('pencil icon')).toBeInTheDocument();
    expect(screen.getByAltText('trash icon')).toBeInTheDocument();
  });

  it('abre o modal ao clicar no ícone de lápis', async () => {

    render(<DetailsCard {...mockData} />);

    // Simula o clique no ícone de lápis
    fireEvent.click(screen.getByAltText('pencil icon'));

    // Verifica se o modal é exibido
    await waitFor(() => {
      expect(screen.getByText('Salvar')).toBeInTheDocument(); // Ajuste conforme necessário
    });
  });
});