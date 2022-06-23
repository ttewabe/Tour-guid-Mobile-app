import React, { Component } from 'react';
import {Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { SITES } from '../shared/sites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';




class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: SITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
            <Card title="Contact Information" wrapperStyle={{margin: 20}}> 
                    <Text Style={{marginBottom: 10}}>1 San Jose, CA 95136 U.S.A.</Text>
                    <Text >
                    Phone: 1-408-514-xxxx
                    </Text>
                    <Text >
                    Email: jsmart22@gmail.com
                    </Text>
            </Card>
        </ScrollView>
        );
    }
}

export default Contact;