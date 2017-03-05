"use strict";

import {
    ACTION_NAME
} from "./actionTypes";

const defaultState = {
    exampleState: 0
};


export default function (state = defaultState, action) {
    switch (action.type) {
    case ACTION_NAME:
        return Object.assign({}, state, {
            exampleState: state.exampleState + 1
        });
    default:
        return state;
    }
}
