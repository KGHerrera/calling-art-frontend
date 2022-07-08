import {AiOutlineYoutube, AiFillTwitterCircle, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai';
import '../styles/Footer.css';

export default function Footer( props ){
    return (
        <div className="footer-conteiner">
            <div className="follow-conteiner">
                <p>follow us</p>
                <AiOutlineYoutube className='follow-icon' />
                <AiFillTwitterCircle className='follow-icon' />
                <AiOutlineGithub className='follow-icon' />
                <AiOutlineInstagram className='follow-icon' />
            </div>
            <div className="contact-us-conteiner">
                <p>contact us calling-art@gmail.com</p>
            </div>
        </div>
    );
}   