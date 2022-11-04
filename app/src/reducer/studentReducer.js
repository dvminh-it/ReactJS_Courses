import * as types from '../constant'

const INITIAL_STATE = {
    listStudent: [],
    isFetching: false,
    isError: false,
    message: ""
}

const studentReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.GET_REQUEST:
        case types.ADD_REQUEST:
        case types.DELETE_REQUEST:
            return {
                ...state, isFetching: true
            }
        case types.GET_SUCCESS:
            return {
                ...state, isFetching: false, listStudent: payload.data
            }
        case types.ADD_SUCCESS:
        case types.DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.GET_FAILURE:
        case types.ADD_FAILURE:
        case types.DELETE_FAILURE:
            return {
                ...state, isFetching: false, isError: false, message: payload
            }
        default: return state
    }
}

export default studentReducer 