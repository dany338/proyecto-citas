import React from 'react';
import { Link } from 'react-router-dom';

const colors = {
  'Asignada': 'text-primary',
  'Finalizada': 'text-success',
  'Cancelada': 'text-danger',
  'Reagendada': 'text-warning'
};

const RowTable = ({ info, indice, elimnar }) => {
  const { id, odontologo, paciente, estado } = info

  return (
    <tr>
      <th scope='row'>{indice + 1}</th>
      <td>{odontologo}</td>
      <td>{paciente}</td>
      <td className={colors[estado]}><b>{estado}</b></td>
      <td className='d-flex justify-content-around'>
        <Link className='btn btn-warning' to={`/editar-cita/${id}`}>
          Editar
        </Link>
        <Link className='btn btn-primary' to={`/ver-cita/${id}`}>
          Ver detalle
        </Link>
        <button className='btn btn-danger' onClick={elimnar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default RowTable;
