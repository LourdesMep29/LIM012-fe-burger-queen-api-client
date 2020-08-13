import {
  getProducts, postProduct, deleteProduct, putProduct,
} from '../../controller/admin-products';
import { server } from '../../__mock__/server';

// Establecer el mock API antes de realizar los tests
beforeAll(() => server.listen());
// Resetear cualquier request para que no afecte otros tests
afterEach(() => server.resetHandlers());
// Limpiar todo los tests al finalizar
afterAll(() => server.close());

const objProducts = {
  _id: 1,
  name: 'Hamburguesa doble',
  price: '15',
  image: '',
  type: 'burger',
  date: '2020-07-15',
};

describe('getProducts', () => {
  test('Debería retornar un producto ', async () => {
    const response = await getProducts();
    expect(response).toEqual(objProducts);
  });
});

describe('postProducts', () => {
  test('Debería retornar producto agregado', async () => {
    const response = await postProduct(objProducts);
    expect(response).toEqual(objProducts);
  });
});

describe('deleteProduct', () => {
  test('Debería eliminar producto', async () => {
    const response = await deleteProduct('1');
    expect(response.message).toBe('El producto ha sido eliminado');
  });
});

describe('putProduct', () => {
  test('Debería retornar producto editado', async () => {
    const response = await putProduct(objProducts, '1');
    expect(response).toEqual(objProducts);
  });
});
