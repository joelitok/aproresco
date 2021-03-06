import { createStore, applyMiddleware, compose } from 'redux';
// middlewaresss
import thunkMiddleware from 'redux-thunk'
// Import custom components
import reducers from '../Action-Reducer';

const store = createStore(reducers,   compose(
    applyMiddleware(thunkMiddleware),

    //For working reduxon  dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));

export default store;