import React, { createContext } from "react";
//Importacion de componentes hijos
import Form from "../components/todo/todoHijos/Form";
import List from "../components/todo/todoHijos/List";
//importacion de funciones reutilizables
import { StoreProvider } from "../components/todo/providers/storeReducer";

export const initialState = {
  todo: { list: [], item: {} },
};
export const Store = createContext(initialState);

function Todo() {
  return (
    <StoreProvider>
      <div className="containerform ">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h3>To-Do List</h3>
            <List Store={Store} />
            <Form Store={Store} />
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default Todo;
