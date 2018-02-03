const toggleAction = () => {
    return {
        type: 'TOGGLE_LIGHT',
        payload: null
    }
}
const ToggleMap = {
    mapStateToProps : (state = { lightsOn: false }) => {
        return {
            lightsOn: state.lightsOn
        }
    },
    mapDispatchToProps : (dispatch) => {
        return {
            onToggle : () => {
                dispatch(toggleAction());
            }
        }
    }
}

export default ToggleMap;