import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../../../__mock__/server';
import UsersTable from '../../../components/admin/users/UsersTable';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setState = jest.fn();
const state = {
  allUsers: [{
    _id: 'u_001',
    email: 'example@gmail.com',
    password: '13142dsg',
    roles: { admin: true },
  }],
  display: {
    modal: false,
    btnEdit: true,
  },
};

describe('UserTable', () => {
  test('verificar que no existen usuarios', () => {
    render(<UsersTable state={state} />);
    expect(screen.getByText('example@gmail.com')).toBeInTheDocument();
  });

  test('No debería mostrar el mensaje de cuando no hay usuarios', () => {
    render(<UsersTable state={state} />);
    expect(screen.queryByText('No hay usuarios registrados')).not.toBeInTheDocument();
  });

  test('Debería eliminar usuario', () => {
    render(<UsersTable state={state} setState={setState} />);
    userEvent.click(screen.getByTestId('delete'));

    expect(setState).toHaveBeenCalled();
  });
});
