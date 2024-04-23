import dynamic from 'next/dynamic';
import './location.css';
import './locationTable.css';
import Heading from "../drones/heading";
import Link from "next/link";


const Forms = dynamic(() => import('./clientForm.client'), {
    ssr: false
});

import LocationTable from './locationTable';  

const LocationPage = () => {
    return (
        <div>
            <Heading/>
            <LocationTable/>
            <Forms /> 
        </div>
    );
};

export default LocationPage;
