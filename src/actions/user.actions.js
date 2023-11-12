export function setUserName(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }, 2000)
    }
}

export function setUserAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}
