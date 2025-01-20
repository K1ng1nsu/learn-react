import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const desc = ['Fundamental', 'core', 'Crutial'];

function Header() {
    const random = Math.floor(Math.random() * 3);

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{desc[random]} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

export default Header;
