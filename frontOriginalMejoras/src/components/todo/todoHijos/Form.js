import React, { useContext, useRef, useState } from "react";

const HOST_API = "http://localhost:8080/api";

const Form = (props) => {
  let Store = props.Store;
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: null,
      completed: false,
    };
    console.log(typeof request.name);

    if (
      request.name === undefined ||
      request.name === null ||
      request.name === ""
    ) {
      console.log("Debes ingresar un nombre");
    } else {
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch({ type: "add-item", item: todo });
          setState({ name: "" });
        });
    }
    formRef.current.reset();
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <div>
      <form ref={formRef}>
        <input
          className="formtodo"
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {item.id && (
          <button className="btntodocrear" onClick={onEdit}>
            Actualizar
          </button>
        )}
        {!item.id && (
          <button className="btntodocrear" onClick={onAdd}>
            Crear
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
