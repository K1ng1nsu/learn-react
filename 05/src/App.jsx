import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/userInput';
import Result from './components/Result';

function App() {
    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inpurtIsValid = userInputs.duration >= 1;

    function changeHandler(type, value) {
        setUserInputs((prev) => {
            const updatedInputs = { ...prev };
            updatedInputs[type] = value;

            return updatedInputs;
        });
    }

    return (
        <div>
            <Header />
            <div id="user-input">
                <div className="input-group">
                    <UserInput onChange={changeHandler} type="initialInvestment" value={userInputs.initialInvestment}>
                        INITIAL INVESTMENT
                    </UserInput>
                    <UserInput onChange={changeHandler} type="annualInvestment" value={userInputs.annualInvestment}>
                        ANNUAL INVESTMENT
                    </UserInput>
                </div>
                <div className="input-group">
                    <UserInput onChange={changeHandler} type="expectedReturn" value={userInputs.expectedReturn}>
                        EXPECTED RETURN
                    </UserInput>
                    <UserInput onChange={changeHandler} type="duration" value={userInputs.duration}>
                        DURATION
                    </UserInput>
                </div>
            </div>
            {inpurtIsValid && <Result userInputs={userInputs} />}
            {!inpurtIsValid && <p className="center">Please enter a duration greater then zero.</p>}
        </div>
    );
}

export default App;
