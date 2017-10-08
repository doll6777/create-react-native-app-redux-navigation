import {combineReducers} from 'redux';
import {AppNavigator} from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Screen1'));

function nav(state = initialNavState, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

const AppReducer = combineReducers({
    nav
});

export default AppReducer;