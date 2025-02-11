import MoneyImage from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={MoneyImage} alt="money" />
            <h1>Investment Calculator</h1>
        </header>
    );
}
