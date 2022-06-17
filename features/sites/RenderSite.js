import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderSite = ({ site }) => {
        if (site){
            return(
                <Card containerStyle={{padding:0}}>
                    <Card.Image source={site.image}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text 
                                style={{ 
                                    color: 'white', 
                                    textAlign: 'center', 
                                    fontSize: 20
                                }}
                            >
                                {site.name}
                            </Text>
                        </View>
                    </Card.Image>
                    <Text style={{ margin: 20 }}>{site.description}</Text>
                </Card>
            );
        }
        return <View/>;
};
export default RenderSite;