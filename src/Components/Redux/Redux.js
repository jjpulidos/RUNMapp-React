import { createStore } from 'redux';
import reducer from './reducer';


const initialState = {
    currentComponent: 0,
    data: [],
    toggle: '',
    toggleSide: '',
    overflow: 'Hide',
    toggle2: '',
    canToggle: false,

    toggle_UpDown: false,
    toggle_Sides: false,


    renderOption: undefined,

    buildings: [],
    events: [],
    current_Id: ''
};


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    console.log(store.getState());
})


export default store
