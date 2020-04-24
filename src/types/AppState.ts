import rootReducer from 'store/reducerCombiner';

export type AppState = ReturnType<typeof rootReducer>;
