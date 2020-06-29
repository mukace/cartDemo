import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocalStorage = state => {
    try {
        const stringifiedState = JSON.stringify(state);
        localStorage.setItem('state', stringifiedState);
    } catch (err) {
        console.log(err)
    }
}

const loadFromLocalStorage = () => {
    try {
        const localStorageState = localStorage.getItem('state');
        if (localStorageState === null) return undefined;
        return JSON.parse(localStorageState);
    } catch (err) {
        console.log(err)
    }
}

const persistedState = loadFromLocalStorage();


const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;