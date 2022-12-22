import buzoReducer from "./buzoReducer";
import remeraMReducer from "./remeraMReducer";
import remeraFReducer from "./remeraFReducer";
import userReducer from "./userReducer";
import cartReducer from "./carritoReducer";
import productosReducer from "./productosReducer";

const rootReducer = {
 
  buzos: buzoReducer,
  remerasM: remeraMReducer,
  remerasF: remeraFReducer,
  userReducer,
  carritoR: cartReducer,
  productos: productosReducer,

};

export default rootReducer 
