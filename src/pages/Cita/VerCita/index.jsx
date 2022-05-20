import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formuario from "../../../components/Formulario";
import { obtenerProducto, editarProducto } from "../../../redux/actions/cita";

// import ProductContext from '../../context/products/productContext';

const VerPlato = () => {
  let dispatch = useDispatch();

  const { cita: citaMedica } = useSelector((state) => state);
  const { cita, editOk } = citaMedica;

  const params = useParams();
  const navigate = useNavigate();

  // console.log('el params es: ', params);

  useEffect(() => {
    dispatch(obtenerProducto(params.editId));
  }, []);

  useEffect(() => {
    if (editOk) {
      navigate("/dashboard");
    }
  }, [editOk]);

  console.log("cita ->", cita);

  const tieneCita = Object.keys(cita).length;

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="text-primary text-center py-3">Ver Cita</h5>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          {tieneCita > 0 ? (
            <Formuario
              cita={cita}
              editar={false}
              ver={true}
              editarCita={(cita) => dispatch(editarProducto(cita))}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VerPlato;
