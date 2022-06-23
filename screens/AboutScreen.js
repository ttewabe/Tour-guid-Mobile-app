import {Text, ScrollView} from 'react-native';
import { Avatar, Card, ListItem  } from 'react-native-elements';
import {useState} from 'react';
import { PARTNERS } from '../shared/partners';

function Mission(){

    return (
        <Card> 
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}> 
            Our mission is to offer travelers an authentic Ethiopian Targeting origin tourism brand streamlined to capture the comprehensive tradition of Ethiopian hospitality but with a world-class service. We have set clear objectives to be a leader in the market, to develop new adventures & unleashing Ethiopia’s tourism potential as well as promote sustainable tourism development!.
            </Text>
        </Card>
    )
}

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Our Tour Guid Partners</Card.Title>
                <Card.Divider />
                {partners.map((partner) =>(
                    <ListItem key={partner.id}>
                    <Avatar rounded source={partner.image} />
                    <ListItem.Content>
                        <ListItem.Title>{partner.name}</ListItem.Title>
                        <ListItem.Subtitle>
                            {partner.description}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
                </Card>
            </ScrollView>
        );
    }
export default AboutScreen;