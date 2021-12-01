import { Routes ,Route } from 'react-router-dom';
import EstablishmentList from "../../containers/EstablishmentList";

/**
 * Routes
 * @returns Routes 
 */
const RoutesEstablishment = () => {
    return (
        <Routes>
            <Route path='/' element={<EstablishmentList/>} />
        </Routes>
    );
};

export default RoutesEstablishment;