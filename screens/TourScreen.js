import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { SITES } from '../shared/sites';


    const TourScreen = ({ navigation }) => {
        const [sites, setSites] = useState(SITES);
        

    const renderTourItem = ({ item: site }) => {
        return (
            <ListItem onPress={() => navigation.navigate('SiteInfo', {site})}>
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
            data={sites}
            renderItem={renderTourItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default TourScreen;