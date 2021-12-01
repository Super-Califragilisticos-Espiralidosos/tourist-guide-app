import { Routes ,Route } from 'react-router-dom';
import EstablishmentDetail from '../../containers/EstablishmentDetail';
import EstablishmentList from "../../containers/EstablishmentList";

/**
 * Routes
 * @returns Routes 
 */
const RoutesEstablishment = () => {
    return (
        <Routes>
            <Route path='/' element={<EstablishmentList/>} />
            <Route path="/establishment" element={<EstablishmentDetail/>}/>
        </Routes>
    );
};

export default RoutesEstablishment;