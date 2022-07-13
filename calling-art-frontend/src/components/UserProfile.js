import '../styles/UserProfile.css'

export default function UserContent(){
    return (
        <div className="user-conteiner">
            <div className="user-square"></div>
            <div className="user-image"></div>
            <h1 className="user-name">username</h1>
            <p className="user-description">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi
            </p>
            <h2 className="user-images">username's images</h2>
        </div>
    );
}