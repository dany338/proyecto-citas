import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  obtenerCitas,
  eliminarCita,
} from "../../redux/actions/cita";

import Table from "../../components/Table";

const Dashboard = () => {
  let dispatch = useDispatch();

  const { cita } = useSelector((state) => state);

  const { listaCitas, deleteOk } = cita;

  // const { obtenerCitas, eliminarCita, listaCitas, deleteOk } = useContext(ProductContext);

  useEffect(() => {
    dispatch(obtenerCitas());
  }, []);

  useEffect(() => {
    if (deleteOk) {
      dispatch(obtenerCitas());
    }
  }, [deleteOk]);

  return (
    <>
      <h1>Citas Odontologicas Programadas</h1>
      <Table
        listaCitas={listaCitas}
        eliminarCita={(id) => dispatch(eliminarCita(id))}
      />
    </>
  );
};

export default Dashboard;
