import { combineReducers } from 'redux';

import cart from './cart/reducer';

// colocar todos os reducers aqui para exportar
export default combineReducers({
  cart,
});
