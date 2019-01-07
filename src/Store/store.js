import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let initialState = {todo:[]}

const reducer = (state = initialState, action) => {
  switch(action.type)
}
