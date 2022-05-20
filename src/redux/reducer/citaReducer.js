const intialState = {
    listaCitas: [],
    addOk: false,
    editOk: false,
    deleteOk: false,
    cita: {}
}

export const citaReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'AGREGAR_CITA':
            return {
                ...state,
                addOk: action.payload
            }
        case 'LLENAR_CITAS':
            return {
                ...state,
                addOk: false,
                editOk: false,
                deleteOk: false,
                listaCitas: action.payload,
                cita: {}
            }
        case 'OBTENER_CITA':
            return {
                ...state,
                cita: action.payload
            }
        case 'EDITAR_CITA':
            return {
                ...state,
                editOk: action.payload
            }
        case 'ELIMINAR_CITA':
            return {
                ...state,
                deleteOk: action.payload
            }
        default:
            return state
    }
}
