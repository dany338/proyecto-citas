import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

const initialState = {
  paciente: '',
  odontologo: '',
  observacion: '',
  fecha: '',
  horaInicio: '',
  horaFin: '',
  estado: ''
};

const errorInit = {
  ...initialState
}

const estados = ['Asignada', 'Finalizada', 'Cancelada', 'Reagendada'];

const Formuario = ({ agregarCita, cita, editar = false, editarCita, ver = false }) => {

  const [dataForm, setDataForm] = useState(initialState);
  const [errors, setErrors] = useState(errorInit);

  useEffect(() => {
    if (editar || ver) {
      console.log('mira la cita', cita)
      setDataForm({ ...cita })
    }
  }, []);


  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  const isValid = () => {
    let respuesta = true;
    const localErrors = { ...errorInit };
    for (let key in dataForm) {
      if (key !== 'id') {
        if (dataForm[key].trim() === '' || dataForm[key].length === 0) {
          localErrors[key] = 'Campo Requerido';
          respuesta = false
        }
      }

    }
    setErrors(localErrors);

    return respuesta
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      if (editar) {
        console.log('vamos a editar');
        editarCita(dataForm);
      } else {
        agregarCita(dataForm);
      }
    }
  }

  return (
    <form className='row g-3' onSubmit={handleSubmit}>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Nombre del paciente
        </label>
        {ver ? (
          <label htmlFor='dish' className='form-label'>
            <b>{' '}{dataForm.paciente}</b>
          </label>
        ) : (
          <>
            <input type='text' className='form-control' name='paciente' onChange={handleChange} value={dataForm.paciente} />
            <Error text={errors.paciente} />
          </>
        )}
      </div>
      <div className='col-md-6'>
        <label htmlFor='odontologo' className='form-label'>
          Odontologo
        </label>
        {ver ? (
          <label htmlFor='odontologo' className='form-label'>
            <b>{' '}{dataForm.odontologo}</b>
          </label>
        ) : (
          <>
            <input type='text' className='form-control' name='odontologo' onChange={handleChange} value={dataForm.odontologo} />
            <Error text={errors.odontologo} />
          </>
        )}
      </div>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Fecha:
        </label>
        {ver ? (
          <label htmlFor='dish' className='form-label'>
            <b>{' '}{dataForm.fecha}</b>
          </label>
        ) : (
          <>
            <input type='date' className='form-control' name='fecha' onChange={handleChange} value={dataForm.fecha} />
            <Error text={errors.fecha} />
          </>
        )}
      </div>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Hora Inicio:
        </label>
        {ver ? (
          <label htmlFor='dish' className='form-label'>
            <b>{' '}{dataForm.horaInicio}</b>
          </label>
        ) : (
          <>
            <input type='time' className='form-control' name='horaInicio' onChange={handleChange} value={dataForm.horaInicio} />
            <Error text={errors.horaInicio} />
          </>
        )}
      </div>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Hora Fin:
        </label>
        {ver ? (
          <label htmlFor='dish' className='form-label'>
            <b>{' '}{dataForm.horaFin}</b>
          </label>
        ) : (
          <>
            <input type='time' className='form-control' name='horaFin' onChange={handleChange} value={dataForm.horaFin} />
            <Error text={errors.horaFin} />
          </>
        )}
      </div>
      <div className='col-md-6'>
        <label htmlFor='observacion' className='form-label'>
          Observación
        </label>
        {ver ? (
          <label htmlFor='observacion' className='form-label'>
            <b>{' '}{dataForm.observacion}</b>
          </label>
        ) : (
          <>
            <textarea
              className='form-control'
              id='observacion'
              rows='3'
              name='observacion'
              onChange={handleChange} value={dataForm.observacion}
            ></textarea>
            <Error text={errors.observacion} />
          </>
        )}
      </div>
      <div className='col-6'>
        <label htmlFor='inputAddress' className='form-label'>
          Estado
        </label>
        {ver ? (
          <label htmlFor='inputAddress' className='form-label'>
            <b>{' '}{dataForm.estado}</b>
          </label>
        ) : (
          <>
            <select className='form-select' name='estado' onChange={handleChange} value={dataForm.estado}>
              <option disabled value=''>
                Estado de la cita
              </option>
              {estados.map((estado) => <option key={estado} value={estado}>{estado}</option> )}
            </select>
            <Error text={errors.estado} />
          </>
        )}
      </div>
      <div className='col-12'>
        {!ver ? (
          <button type='submit' className='btn btn-primary'>
            {editar ? 'Editar Cita' : 'Registrar Cita'}
          </button>
        ) : (
          <Link className='btn btn-primary' to="/dashboard">
            Cerrar
          </Link>
        )}
      </div>
    </form>
  );
};

export default Formuario;
