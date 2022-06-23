import { useState } from 'react';
import { ScrollView,Text, View } from 'react-native';
import  {Card } from 'react-native-elements';
import  {SITES}  from '../shared/sites';
import  {PROMOTIONS} from '../shared/promotions';
import  {PARTNERS}  from '../shared/partners';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const campsites = useSelector((state) => state.campsites);
const promotions = useSelector((state) => state.promotions);
const partners = useSelector((state) => state.partners);

const featCampsite = campsites.campsitesArray.find((item) => item.featured);
const featPromotion = promotions.promotionsArray.find(
    (item) => item.featured
);
const featPartner = partners.partnersArray.find((item) => item.featured);


const FeaturedItem = ({item}) => {
    if (item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={item.image} >
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>{item.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        )
    }
    return <View />;
}
const HomeScreen = () => {
    const [sites, setSites] = useState(SITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    const featSite = sites.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner= partners.find((item) => item.featured);
    return(
        <ScrollView>
            <FeaturedItem item={featSite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    )
}
export default HomeScreen;