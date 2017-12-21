import {combineReducers} from 'redux';

import { manageAccount } from './manageAccount';
import { manageMap } from './manageMap';
import { manageTour } from './manageTour';

const rootReducer = combineReducers({
  account: manageAccount,
  map: manageMap,
  tour: manageTour
})

export default rootReducer;
