import {AiOutlineYoutube, AiFillTwitterCircle, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai';

export default function Footer( props ){
    return (
        <div className="footer-conteiner">
            <div className="follow-conteiner">
                <p>follow us</p>
                <AiOutlineYoutube />
                <AiFillTwitterCircle />
                <AiOutlineGithub />
                <AiOutlineInstagram />
            </div>
            <div className="contact-us-conteiner">
                <p>contact us calling-art@gmail.com</p>
            </div>
        </div>
    );
}   