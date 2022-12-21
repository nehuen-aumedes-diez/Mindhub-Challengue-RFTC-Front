import buzoReducer from "./buzoReducer";
import gorraReducer from "./gorraReducer";
import remeraMReducer from "./remeraMReducer";
import remeraFReducer from "./remeraFReducer";
import userReducer from "./userReducer";
import cartReducer from "./carritoReducer";

const rootReducer = {
 
  buzos: buzoReducer,
  gorras: gorraReducer,
  remerasM: remeraMReducer,
  remerasF: remeraFReducer,
  userReducer,
  carritoR: cartReducer

};

export default rootReducer 
