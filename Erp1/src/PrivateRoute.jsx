import {Navigate, Navigation} from 'react-router-dom'
import { Auth } from './Auth';
const PrivateRoute=({children})=>{
    return Auth.isAuthenicated()?children:<Navigate to="/Login" />
}
export default PrivateRoute;