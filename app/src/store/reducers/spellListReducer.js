const initialState = {
    quote: '',
    isFetching: false,
    error: ''
  };
  
  export const spellListReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
      case 'FETCH_SPELL_START':
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_SPELL_SUCCESS':
        return {
          ...state,
          isFetching: false,
          monster: action.payload,
          error: ''
        };
        case 'FETCH_SPELL_SUCCESS_MORE':
        return{
          ...state,
          name:action.payload,
          error:''
        }
        return state;
    }
  };
  