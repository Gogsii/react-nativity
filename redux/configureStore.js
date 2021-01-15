import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { favorites } from './favorites';
import { InitialFeedback } from './forms'
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}


export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            favorites: favorites
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store };
};