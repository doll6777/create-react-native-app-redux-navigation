import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { connect } from 'react-redux';

class Screen1 extends Component {
    static navigationOptions = {
        tabBarLabel: "Screen1",
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-checkmark-circle-outline" size={32} color="green" />
        )
    };

    constructor(props) {
       super(props);
       this.state = {
           key: '',
       }
    }

    render() {
        return (
          <View/>
        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(Screen1);