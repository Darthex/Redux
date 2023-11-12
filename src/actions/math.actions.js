export function addNumbers(number) {
    return {
        type: "ADD",
        payload: number
    }
}

export function subtractNumbers(number) {
    return {
        type: "SUBTRACT",
        payload: number
    }
}
