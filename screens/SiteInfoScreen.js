import RenderSite from '../features/sites/RenderSite'; 

const siteInfoScreen = ({ route }) => {

const { site } = route.params;
    return <RenderSite site={site} />;
};
export default siteInfoScreen;