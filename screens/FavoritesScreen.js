import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const FavoritesScreen = ({ navigation }) => {

    const { sitesArray, isLoading, errMess } = useSelector(
        (state) => state.sites
    );
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const renderFavoriteItem = ({ item: site }) => {
        return(
            <SwipeRow rightOpenValue={-100}>
                <View style={styles.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() => dispatch(toggleFavorite(site.id))}>

                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                    <View>
                        <ListItem
                            onPress={() =>
                                navigation.navigate('Tour', {
                                    screen: 'SiteInfo',
                                    params: { site }
                                })
                            }
                        >
                            <Avatar
                                rounded
                                source={{ uri: baseUrl + site.image }}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{site.name}</ListItem.Title>
                                <ListItem.Subtitle>
                                    {site.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </View>
                </SwipeRow>
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
const styles = StyleSheet.create({
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
    }
});

export default FavoritesScreen;
