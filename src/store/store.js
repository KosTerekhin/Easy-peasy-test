import { createStore } from 'easy-peasy'; // 👈 import
import storeModel from './models/root.models';

const store = createStore(storeModel);
export default store;
