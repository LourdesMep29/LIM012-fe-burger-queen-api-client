/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { deleteUser } from '../../../controller/admin-users';

const UsersTable = ({ state, setState, modalRoot }) => {
  const handleDeleteUser = (event) => {
    const id = event.target.attributes.getNamedItem('data-info').value;
    setState((prevState) => ({
      ...prevState,
      allUsers: state.allUsers.filter((user) => user._id !== id),
    }));
    deleteUser(id);
  };

  const handleUpdateUser = (user) => {
    document.body.append(modalRoot);
    setState((prevState) => ({
      ...prevState,
      userData: {
        _id: user._id,
        email: user.email,
        password: user.password,
        roles: { admin: user.roles.admin },
      },
      display: {
        modal: true,
        btnEdit: true,
      },
    }));
  };

  return (
    <table className="table">
      <thead className="head-table">
        <tr>
          <th>ID usuario</th>
          <th>e-mail</th>
          <th>Admin</th>
          <th />
        </tr>
      </thead>
      <tbody className="body-table">
        {
          state.allUsers.length > 0
            ? state.allUsers.map((element) => (
              <tr key={element._id}>
                <td>{element._id}</td>
                <td>{element.email}</td>
                <td>{element.roles.admin ? 'SI' : 'NO' }</td>
                <td>
                  <i data-testid="edit" className="icon edit fas fa-edit" onClick={() => handleUpdateUser(element)} role="button" tabIndex={0} />
                  <i data-testid="delete" data-info={element._id} className="icon delete fas fa-trash-alt" onClick={handleDeleteUser} role="button" tabIndex={0} />
                </td>
              </tr>
            )) : (
              <tr>
                <td>No hay usuarios registrados</td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
};

export default UsersTable;
