import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../../../components/admin/products/ProductList';

describe('ProductList ', () => {
  
  test('Debería encontrar "Agregar usuarios" en el componente', () => {
    render(<ProductList />); 
    expect(screen.getByText('Agregar usuarios')).toBeInTheDocument();
  });

  test('Debería encontrar "Lista de productos" en el componente', () => {
    render(<ProductList />); 
    expect(screen.getByText('Lista de productos')).toBeInTheDocument();
  });

  test('buscando tag', () => {
    render(<ProductList />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});