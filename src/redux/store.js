import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Початковий стан для filters
const initialFiltersState = {
  name: "",
};

// Створення slice для контактів
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Створення slice для фільтрів
const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Об'єднання редукторів за допомогою combineReducers
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filters: filtersSlice.reducer,
});

// Конфігурація для redux-persist для збереження поля items зі слайса контактів
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

// Створення persistReducer для застосування конфігурації до редуктора слайса контактів
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створення store та persistor
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);