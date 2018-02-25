import { combineReducers } from 'redux';

import { CHANGE_PAGE } from "./action";

export const initState = {
    info: {
        id:0,
        name:'ddd',
        bgimg:'',
        url:'',
    }
  }

export let reducers=combineReducers({
    info(state=initState,action){
        switch(action.type){
            case CHANGE_PAGE:
                let newInfo=action.info;
                return newInfo;
            break;
            default:return state;
        }
    }
  })