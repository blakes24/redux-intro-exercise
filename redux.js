const INITIAL_STATE = { mood: { emoji: 'ʅ(´◡◝)ʃ', color: 'white' } };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MOOD':
      return { ...state, mood: action.payload };

    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);
