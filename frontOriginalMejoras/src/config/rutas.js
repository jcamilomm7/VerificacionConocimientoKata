import Todo from "../pages/Todo";

//Array de ruta para el app kata, en este caso todo va a correr solo en un componente 
//y tendra de ruta app-kata en la url
const rutasTareas = [
  {
    patch: "/",
    component: Todo,
  },
];

const rutas = [...rutasTareas];

export default rutas;
