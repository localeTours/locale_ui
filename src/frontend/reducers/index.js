import {combineReducers} from 'redux';

import { manageAccount } from './manageAccount';
import { manageMap } from './manageMap';
import { manageCheckpoints } from './manageCheckpoints';
import { manageTour } from './manageTour';

const rootReducer = combineReducers({
  account: manageAccount,
  map: manageMap,
  checkpoints: manageCheckpoints,
  tour: manageTour
})

export default rootReducer;
