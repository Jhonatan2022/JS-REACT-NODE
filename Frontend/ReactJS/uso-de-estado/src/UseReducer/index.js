import React from "react";

const SECURITY_CODE = "1234";

function UseReducer({ name }) {
    const initialState = {
        value: "",
        error: false,
        loading: false,
        deleted: false,
        confirm: false,
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onConfirm =() =>dispatch({type:actionTypes.CONFIRM});
    const onError =() =>dispatch({type:actionTypes.ERROR});
    const onCheck =() =>dispatch({type:actionTypes.CHECK});
    const onDlete =() =>dispatch({type:actionTypes.DELETE});
    const onReset =() =>dispatch({type:actionTypes.RESET});

    // Destructuramos el evento que nos llega por parámetro
    // { target: { value }} = event.target.value
    const onWrite = ({ target: { value }}) => {
        dispatch({type:actionTypes.WRITE, payload: value});
    };
  

    React.useEffect(() => {
        if (!!state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
                }
            }, 2000);
        }
    }, [state.loading]);


    if (!state.deleted && !state.confirm) {
        return (
            <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {state.error && <p>Código de seguridad incorrecto.</p>}
                {state.loading && <p>Comprobando código de seguridad...</p>}

                <input
                    placeholder="Código de seguridad"
                    value={state.value}
                    onChange={ onWrite }
                />

                <button onClick={ onCheck }
                >
                    Comprobar
                </button>
            </div>
        );
    } else if (!!state.confirm && !state.deleted) {
        return (
            <React.Fragment>
                <h1>¿Estás seguro de que quieres eliminar {name}?</h1>

                <button onClick={ onDlete }
                >
                    Sí
                </button>

                <button onClick={ onReset }>
                    No
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <button onClick={ onReset }>
                    Volver
                </button>
            </React.Fragment>
        );
    }
}

export { UseReducer };

const actionTypes = {
    ERROR: "ERROR",
    CONFIRM: "CONFIRM",
    WRITE: "WRITE",
    CHECK: "CHECK",
    DELETE: "DELETE",
    RESET: "RESET",
};

// Reducer with object literal
const reducerOBJECT = (state, payload) => ({
    [actionTypes.CONFIRM]: {
        ...state,
        error: false,
        loading: false,
        confirm: true,
        value: "",
    },
    [actionTypes.ERROR]: { 
        ...state, 
        error: true, 
        loading: false 
    },
    [actionTypes.WRITE]: { 
        ...state, 
        value: payload,
    },
    [actionTypes.CHECK]: { 
        ...state, 
        loading: !state.loading, 
        error: false 
    },
    [actionTypes.DELETE]: { 
        ...state, 
        deleted: true 
    },
    [actionTypes.RESET]: { 
        ...state, 
        confirm: false, 
        deleted: false, 
        value: "" 
    }
});

const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state, action.payload)[action.type];
    } else {
        return {
            ...state,
        };
    }
};

// // Note: UseReducer
// const reducerIF = (state, action) => {
//   if (action.type === "ERROR") {
//     return {
//       ...state,
//       error: true,
//       loading: false,
//     };
//   } else if (action.type === "CONFIRM") {
//     return {
//       ...state,
//       error: false,
//       loading: false,
//       confirmed: true,
//     };
//   } else {
//     return {
//       ...state,
//     };
//   }
// };

// // Reducer with switch statement
// const reducerSWITCH = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return {
//         ...state,
//         error: true,
//         loading: false,
//       };
//     case "CONFIRM":
//       return {
//         ...state,
//         error: false,
//         loading: false,
//         confirmed: true,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };