var counter = 0;

function reducer(state, action) {
    switch (action.type) {
      case 'SET-ZERO': return { ...state, currentComponent: counter}; break
      case 'CHANGE-HOME': return { ...state, currentComponent: counter+=1}; break
      case 'CHANGE-INFO': return { ...state, currentComponent: counter+=1}; break;
      case 'CHANGE-SEARCH': return { ...state, currentComponent: counter+=1}; break;
      case 'CHANGE-EDIT': return { ...state, currentComponent: counter+=1}; break;
      case 'CHANGE-BACK-EDIT': return { ...state, currentComponent: counter-=1}; break;
      case 'CHANGE-BACK-SEARCH': return { ...state, currentComponent: counter-=1}; break;
      case 'CHANGE-BACK-INFO': return { ...state, currentComponent: counter-=1}; break;


      case 'TOGGLE-UP': return { ...state, toggle_UpDown: true}; break;

      case 'TOGGLE-DOWN': return { ...state, toggle_UpDown: false }; break;


      case 'TOGGLE-LEFT': return { ...state, toggle_Sides: true } ; break;
      // case 'TOGGLE-LEFT-CLOSE': return { ...state, toggleSide: 'Toggle_Left', overflow: '', toggle: 'HideElement', canToggle: false} ; break;
      // case 'TOGGLE-LEFT-POPULAR': return { ...state, toggleSide: 'Toggle_Left', overflow: '', toggle: 'HideElement', canToggle: false} ; break;
      // case 'TOGGLE-LEFT-SERVICE': return { ...state, toggleSide: 'Toggle_Left', overflow: '', toggle: 'HideElement', canToggle: false} ; break;



      case 'TOGGLE-RIGHT': return { ...state, toggle_Sides: false } ; break;

      case 'PUSH-BUILD': return {
        ...state,
        buildings: action._data.buildings,
        events: action._data.events,
        StylesState: {
          ...state.StylesState,
          renderMapData: true
        }
      }

      case 'SHOW-EVENTS-MAP': {

        let results = []
        results = state.events.filter(x => x.location === action.id);

        return {
          ...state,
          toggleSide:'Toggle_Left',
          overflow: '',
          toggle: 'HideElement',
          events: results
        }
      }
      case 'RESET-MAP-DATA-RENDER': return { ...state, StylesState: {...state.StylesState, renderMapData: false}}
      // case 'CAN-TOGGLE-ON': return {...state, canToggle: true}
      // case 'CAN-TOGGLE-OFF': return {...state, canToggle: true}

      default: return state;
    }
}

export default reducer;
