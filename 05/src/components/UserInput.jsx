export default function UserInput({ children, type, value, onChange }) {
    return (
        <p>
            <label>{children}</label>
            <input required type="number" value={value} onChange={(event) => onChange(type, +event.target.value)} />
        </p>
    );
}
