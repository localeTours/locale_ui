import {combineReducers} from 'redux';

import { manageAccount } from './manageAccount';
import { manageMap } from './manageMap';
import { manageTour } from './manageTour';
import { manageCheckpoints } from './manageCheckpoints';

const rootReducer = combineReducers({
  account: manageAccount,
  map: manageMap,
  tour: manageTour,
  checkpoints: manageCheckpoints
})

export default rootReducer;
