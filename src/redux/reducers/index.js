let defaultState = {
    data: {}
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "FETCH_DATA") {
        return {
            ...state,
            data: action.data
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;