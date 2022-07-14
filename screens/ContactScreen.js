import {Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


const ContactScreen = () => {
    return (
        <ScrollView>
            <Card  wrapperStyle={{margin: 20}}> 
                <Card.Title> Contact Information</Card.Title>
                <Card.Divider />
                <Text>1 San Jose, CA 95136</Text>
                <Text style={{marginBottom:10}}> U.S.A.</Text>
                <Text>Phone: 1-408-514-xxxx</Text>
                <Text>Email: jsmart22@gmail.com </Text>
            </Card>
        </ScrollView>
        );
    };
export default ContactScreen;