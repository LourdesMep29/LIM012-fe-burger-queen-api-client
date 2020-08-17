import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header/>', () => {
  test('Debería retornar el Header con el título Administrador', () => {
    const title = 'Administrador';
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  // test('Debería retornar el nombre del usuario', () => {
  //   const userName = 'Pedro Campbel';
  //   const { getByText } = render(<p userName={userName}/>);
  //   expect(getByText(userName)).toBeInTheDocument();
  // })
});
