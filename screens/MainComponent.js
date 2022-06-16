import { useState } from 'react';
import TourScreen from './TourScreen';
import { SITES } from '../shared/sites';

const Main = () => {
   const [sites, setSites] = useState(SITES);

   
        return <TourScreen sites={sites} />;
    };


export default Main;