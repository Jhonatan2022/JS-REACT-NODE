import React from "react";

const SECURITY_CODE = "1234";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
  });

  const onConfim = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirm: true,
      value: "",
    });
  };

  const onError = () => {
    setState({ ...state, error: true, loading: false });
  };

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  };

  const onCheck = () => {
    setState({ ...state, loading: !state.loading, error: false });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, confirm: false, deleted: false, value: "" });
  };

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfim();
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
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />

        <button
          onClick={() => {
            onCheck();
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
            onDelete();
          }}
        >
          Sí
        </button>

        <button
          onClick={() => {
            onReset();
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
            onReset();
          }}
        >
          Volver
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };