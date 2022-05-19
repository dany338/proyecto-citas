const initialState = {
    isAuth: false,
    email: null,
    consultando: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                email: action.payload.email,
                isAuth: action.payload.isAuth,
            };

        case 'UPDATE_IS_AUTH':
            return {
                ...state,
                isAuth: action.payload.isAuth,
                email: action.payload.email,
                consultando: action.payload.consultando
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                email: null
            }

        default:
            return state;
    }
};

