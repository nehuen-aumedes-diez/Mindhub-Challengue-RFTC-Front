import buzoReducer from "./buzoReducer";
import remeraMReducer from "./remeraMReducer";
import remeraFReducer from "./remeraFReducer";
import userReducer from "./userReducer";
import cartReducer from "./carritoReducer";

const rootReducer = {
 
  buzos: buzoReducer,
  remerasM: remeraMReducer,
  remerasF: remeraFReducer,
  userReducer,
  carritoR: cartReducer

};

export default rootReducer 
