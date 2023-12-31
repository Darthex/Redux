export const mathReducer = (state = {
    result:1,
    lastValues: []
}, action) => {
    switch(action.type) {
        case "ADD":
            //immutable way
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUB":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state
}