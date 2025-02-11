import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ userInputs }) {
    const arr = calculateInvestmentResults(userInputs);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Captital</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item) => {
                    return (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>
                                {formatter.format(
                                    item.valueEndOfYear -
                                        (userInputs.initialInvestment + userInputs.annualInvestment * item.year)
                                )}
                            </td>
                            <td>
                                {formatter.format(
                                    userInputs.initialInvestment + userInputs.annualInvestment * item.year
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
