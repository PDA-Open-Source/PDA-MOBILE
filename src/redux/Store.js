/**
 * pda
 * Store.js
 * @author Socion Advisors LLP
 * @description Created on 27/02/2019
 * Copyright © 2019 pda. All rights reserved.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers/index';

const logger = createLogger();

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk, logger));