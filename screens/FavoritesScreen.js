import { useSelector } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const FavoritesScreen = ({ navigation }) => {

    const { sitesArray, isLoading, errMess } = useSelector(
        (state) => state.sites
    );
    const favorites = useSelector((state) => state.favorites);
        const renderFavoriteItem = ({ item: site }) => {
            return(
                <ListItem
                    onPress={() =>
                        navigation.navigate('Tour', {
                            screen: 'SiteInfo',
                            params: { site }
                        })
                    }
                    >
                    <Avatar rounded source={{ uri: baseUrl + site.image }} />
                        <ListItem.Content >
                            <ListItem.Title>{site.name}</ListItem.Title>
                                <ListItem.Subtitle>
                                    {site.description}
                            </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )
        }
        if (isLoading) {
            return <Loading />;
        }
        if (errMess) {
            return (
                <View>
                    <Text>{errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={ sitesArray.filter((site) =>
                    favorites.includes(site.id)
            )}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id.toString()}
        />
        )
}

export default FavoritesScreen;


   


   