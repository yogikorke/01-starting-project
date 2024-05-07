export default function TabButton({ children, onSelected, ...props }) {
    return (
        <li>
            <button className={onSelected ? "active" : undefined} {...props}> {children} </button>
        </li>
    );
}