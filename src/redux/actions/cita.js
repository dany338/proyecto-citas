import { db } from "../../firebase";

export const agregarCita = (cita) => {
  return async (dispatch) => {
    console.log("el cita será: ", cita);
    try {
      await db.collection("citas").add(cita);
      dispatch({
        type: "AGREGAR_CITA",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtenerCitas = () => {
  return async (dispatch) => {
    try {
      const citas = [];

      const info = await db.collection("citas").get();
      info.forEach((item) => {
        console.log(item);
        citas.push({
          id: item.id,
          ...item.data(),
        });
      });
      // console.log('mira la citas');
      // console.log(citas);
      dispatch({
        type: "LLENAR_CITAS",
        payload: citas,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtenerCita = (id) => {
  return async (dispatch) => {
    try {
      const info = await db.collection("citas").doc(id).get();
      console.log("la info es", info.data());
      let cita = {
        id: info.id,
        ...info.data(),
      };
      dispatch({
        type: "OBTENER_CITA",
        payload: cita,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editarCita = (cita) => {
  return async (dispatch) => {
    try {
      const citaUpdate = { ...cita };
      delete citaUpdate.id;

      await db.collection("citas").doc(cita.id).update(citaUpdate);
      dispatch({
        type: "EDITAR_CITA",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarCita = (id) => {
  return async (dispatch) => {
    try {
      await db.collection("citas").doc(id).delete();
      dispatch({
        type: "ELIMINAR_CITA",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
