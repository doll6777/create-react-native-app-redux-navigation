import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TabNavigator, addNavigationHelpers} from 'react-navigation';
import Screen1 from '../components/Screen1';

export const AppNavigator = TabNavigator({
    Screen1: {screen: Screen1}
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
    dispatch: state.dispatch,
});

export default connect(mapStateToProps)(AppWithNavigationState);