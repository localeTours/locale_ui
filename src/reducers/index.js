import {combineReducers} from 'redux';

import { manageAccount } from './manageAccount';

const rootReducer = combineReducers({
  account: manageAccount
})

export default rootReducer;
