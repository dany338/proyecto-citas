import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formuario from "../../../components/Formulario";
import { agregarCita } from "../../../redux/actions/cita";

// import ProductContext from '../../context/products/productContext';

const AgregarPlato = () => {
  let dispatch = useDispatch();

  const { cita } = useSelector((state) => state);
  const { addOk } = cita;

  // const { agregarCita, addOk } = useContext(ProductContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (addOk) {
      navigate("/dashboard");
    }
  }, [addOk]);

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="text-primary text-center py-3">Agregar Nueva Cita</h5>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <Formuario
            agregarCita={(cita) => dispatch(agregarCita(cita))}
          />
        </div>
      </div>
    </div>
  );
};

export default AgregarPlato;
