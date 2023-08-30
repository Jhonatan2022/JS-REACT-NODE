import React from "react";

const SECURITY_CODE = "1234";

function UseState({ name }) {
    const initialState = {
        value: "",
        error: false,
        loading: false,
        deleted: false,
        confirm: false,
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if (!!state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    dispatch( {type:"CONFIRM"});
                } else {
                    dispatch( {type:"ERROR"});
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
                    onChange={(event) => {
                        dispatch( {type:"WRITE"});
                        // onWrite(event.target.value);
                    }}
                />

                <button
                    onClick={() => {
                        dispatch( {type:"CHECK"});
                    }}
                >
                    Comprobar
                </button>
            </div>
        );
    } else if (!!state.confirm && !state.deleted) {
        return (
            <React.Fragment>
                <h1>¿Estás seguro de que quieres eliminar {name}?</h1>

                <button
                    onClick={() => {
                        dispatch( {type:"DELETE"});
                    }}
                >
                    Sí
                </button>

                <button
                    onClick={() => {
                        dispatch( {type:"RESET"});
                    }}
                >
                    No
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <button
                    onClick={() => {
                        dispatch( {type:"RESET"});
                    }}
                >
                    Volver
                </button>
            </React.Fragment>
        );
    }
}

export { UseState };

// Reducer with object literal
const reducerOBJECT = (state) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirm: true,
        value: "",
    },
    'ERROR': { 
        ...state, 
        error: true, 
        loading: false 
    },
    'WRITE': { 
        ...state, 
        value: newValue
    },
    'CHECK': { 
        ...state, 
        loading: !state.loading, 
        error: false 
    },
    'DELETE': { 
        ...state, 
        deleted: true 
    },
    'RESET': { 
        ...state, 
        confirm: false, 
        deleted: false, 
        value: "" 
    }
});

const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state)[action.type];
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

// 8:25