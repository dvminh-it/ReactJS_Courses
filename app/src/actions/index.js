import { createAction } from "@reduxjs/toolkit";
import * as types from '../constant';

export const actions = {
    getRequest: createAction(types.GET_REQUEST),
    getSuccess: createAction(types.GET_SUCCESS),
    getFailure: createAction(types.GET_FAILURE),

    addRequest: createAction(types.ADD_REQUEST),
    addSuccess: createAction(types.ADD_SUCCESS),
    addFailure: createAction(types.ADD_FAILURE),

    deleteRequest: createAction(types.DELETE_REQUEST),
    deleteSuccess: createAction(types.DELETE_SUCCESS),
    deleteFailure: createAction(types.DELETE_FAILURE)
}