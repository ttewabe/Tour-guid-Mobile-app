import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

function TourScreen(props) {

    const renderTourItem = ({item: site}) => {
        return (
            <ListItem>
                <Avatar source={site.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{site.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {site.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={props.sites}
            renderItem={renderTourItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default TourScreen;