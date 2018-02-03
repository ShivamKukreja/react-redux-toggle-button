const toggleBackgroundReducer = (state= {lightsOn: false}, action) => {
    switch(action.type) {
        case 'TOGGLE_LIGHT' :
            return {...state, lightsOn: !state.lightsOn};
        default :
            return {...state};
    }
}

export default toggleBackgroundReducer;