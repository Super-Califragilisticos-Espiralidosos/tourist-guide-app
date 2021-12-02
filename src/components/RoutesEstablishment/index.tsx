import { Switch ,Route } from 'react-router-dom';
import EstablishmentDetail from '../../containers/EstablishmentDetail';
import EstablishmentList from "../../containers/EstablishmentList";
import LoginPage from '../../containers/LoginPage';
import ProtectedRoute from '../ProtectedRoutes';

/**
 * Routes
 * @returns Routes 
 */
const RoutesEstablishment = () => {
    return (
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <ProtectedRoute path="/establishments" component={EstablishmentList}/>
            <ProtectedRoute path="/establishment" component={EstablishmentDetail}/>
        </Switch>
    );
};

export default RoutesEstablishment;