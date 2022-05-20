import React from 'react';
import RowTable from '../RowTable';

const Table = ({ listaCitas, eliminarCita }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Odontologo</th>
          <th scope='col'>Peciente</th>
          <th scope='col'>Estado</th>
          <th className='text-center' scope='col'>
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {listaCitas.map((cita, index) => <RowTable key={cita.id} info={cita} indice={index} elimnar={() => eliminarCita(cita.id)} />)}

      </tbody>
    </table>
  );
};

export default Table;
