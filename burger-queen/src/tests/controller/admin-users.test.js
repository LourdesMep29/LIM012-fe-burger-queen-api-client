/* eslint-disable no-underscore-dangle */
import {
  getUsers, postUser, deleteUser, putUser,
} from '../../controller/admin-users';
import { server } from '../../__mock__/server';

// Establecer el mock API antes de realizar los tests
beforeAll(() => server.listen());
// Resetear cualquier request para que no afecte otros tests
afterEach(() => server.resetHandlers());
// Limpiar todo los tests al finalizar
afterAll(() => server.close());

const objUser = {
  _id: 'u_001',
  email: 'example@gmail.com',
  roles: { admin: true },
};

describe('getUsers', () => {
  test('Debería retornar id de usuario', async () => {
    const response = await getUsers();
    expect(response._id).toEqual('u_001');
  });
});

describe('postUser', () => {
  test('Debería retornar usuario agregado', async () => {
    const response = await postUser(objUser);
    expect(response).toEqual(objUser);
  });
});

describe('deleteUser', () => {
  test('Debería eliminar usuario', async () => {
    const response = await deleteUser('u_001');
    expect(response.message).toBe('El usuario ha sido eliminado');
  });
});

describe('putUser', () => {
  test('Debería retornar usuario editado', async () => {
    const response = await putUser(objUser, 'u_001');
    expect(response).toEqual(objUser);
  });
});
