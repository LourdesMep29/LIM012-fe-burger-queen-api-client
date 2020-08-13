/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';

export const handlers = [
  rest.get('https://burger-queen-apilab.herokuapp.com/users', (_req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      _id: 'u_001',
      email: 'example@gmail.com',
      roles: { admin: true },
    }),
  )),

  rest.post('https://burger-queen-apilab.herokuapp.com/users', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(req.body),
  )),

  rest.delete('https://burger-queen-apilab.herokuapp.com/users/u_001', (_req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ message: 'El usuario ha sido eliminado' }),
  )),

  rest.put('https://burger-queen-apilab.herokuapp.com/users/u_001', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(req.body),
  )),

  rest.get('https://burger-queen-apilab.herokuapp.com/products', (_req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      _id: 1,
      name: 'Hamburguesa doble',
      price: '15',
      image: '',
      type: 'burger',
      date: '2020-07-15',
    }),
  )),

  rest.post('https://burger-queen-apilab.herokuapp.com/products', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(req.body),
  )),

  rest.put('https://burger-queen-apilab.herokuapp.com/products/1', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(req.body),
  )),

  rest.delete('https://burger-queen-apilab.herokuapp.com/products/1', (_req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ message: 'El producto ha sido eliminado' }),
  )),

];
