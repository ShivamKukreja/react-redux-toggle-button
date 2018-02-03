import { createStore } from 'redux';
import ToggledBgReducer from './ToggleBtn/ToggledBgReducer';

const prepareStore = (initialState= {}) => {
   return createStore(ToggledBgReducer);  
}

export default prepareStore;