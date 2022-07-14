import {Text, ScrollView} from 'react-native';
import { Avatar, Card, ListItem  } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable'

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
    const partners = useSelector((state) => state.partners);

    if (partners.isLoading) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Our Tour Guid Partners</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            </ScrollView>
        );
    }
    if (partners.errMess) {
        return (
            <ScrollView>
                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                <Mission />
                <Card>
                    <Card.Title>Our Tour Guid Partners</Card.Title>
                    <Card.Divider />
                    <Text>{partners.errMess}</Text>
                </Card>
                </Animatable.View>
            </ScrollView>
        );
    }

    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
            <Mission />
            <Card>
                <Card.Title>Our Tour Guid Partners</Card.Title>
                <Card.Divider />
                {partners.partnersArray.map((partner) =>(
                    <ListItem key={partner.id}>
                    <Avatar rounded source={{ uri: baseUrl + partner.image }} />
                    <ListItem.Content>
                        <ListItem.Title>{partner.name}</ListItem.Title>
                        <ListItem.Subtitle>
                            {partner.description}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
                </Card>
            </Animatable.View>
        </ScrollView>
        );
    }
export default AboutScreen;