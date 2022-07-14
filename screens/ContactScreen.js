import {Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'


const ContactScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
            <Card  wrapperStyle={{margin: 20}}> 
                <Card.Title> Contact Information</Card.Title>
                <Card.Divider />
                <Text>1 San Jose, CA 95136</Text>
                <Text style={{marginBottom:10}}> U.S.A.</Text>
                <Text>Phone: 1-408-514-xxxx</Text>
                <Text>Email: jsmart22@gmail.com </Text>
            </Card>
            </Animatable.View>
        </ScrollView>
        );
    };
export default ContactScreen;