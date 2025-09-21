import {FaHeart} from 'react-icons/fa6';
import "../../assets/Styles/Footer.css";

const Footer=()=>{
    return(
        <footer className="bg-primary custfooter">
            <p style={{margin:"0.5rem",fontWeight:"600"}}>&copy;-2025 <FaHeart style={{color:"red"}}/> MADE IN INDIA</p>
        </footer>
    )
}

export default Footer;