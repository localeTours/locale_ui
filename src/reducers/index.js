import {combineReducers} from 'redux';

import { manageAccount } from './manageAccount';
import { manageMap } from './manageMap';

const rootReducer = combineReducers({
  account: manageAccount,
  map: manageMap
})

export default rootReducer;
