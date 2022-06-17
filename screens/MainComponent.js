import { useState } from 'react';
import { SITES } from '../shared/sites';
import { View } from 'react-native';
import SiteInfoScreen from './SiteInfoScreen';
import TourScreen from './TourScreen';

const Main = () => {
const [sites, setSites] = useState(SITES);
const [selectedSiteId, setSelectedSiteId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <TourScreen 
                sites={sites}
                onPress={(siteId) => setSelectedSiteId(siteId)} 
            />
            <SiteInfoScreen 
                site={ 
                    sites.filter(
                        (site) => site.id === selectedSiteId
                        )[0]
                    }
                />
        </View>
    );
};

export default Main;