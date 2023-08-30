import React from 'react';

const SECURITY_CODE = '1234';

function UseState({ name }) {
  const [ state, setState ] = React.useState({
    value: '',
    error: false,
    loading: false,
});

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({ ...state, error: false, loading: false });
        } else {
          setState({ ...state, error: true, loading: false });
        }
      }, 2000);
    }
  }, [state.loading]);

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
        setState({ ...state, value: event.target.value });
      }}/>

      <button
        onClick={() => {
          setState({ ...state, loading: !state.loading, error: false });
        }}
      >Comprobar</button>
    </div>
  );
}

export { UseState };