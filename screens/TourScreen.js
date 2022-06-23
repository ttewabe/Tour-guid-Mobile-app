import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


    const TourScreen = ({ navigation }) => {
        const sites = useSelector((state) => state.sites);
        

    const renderTourItem = ({ item: site }) => {
        return (
            <Tile
                title={site.name}
                caption={site.description}
                featured
                onPress={() =>
                    navigation.navigate('SiteInfo', { site })
                    
                }
                imageSrc={{ uri: baseUrl + site.image }}
            />
        );
    };

    return (
        <FlatList
            data={sites.sitesArray}
            renderItem={renderTourItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default TourScreen;