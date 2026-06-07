function Button({ label, color = "blue", onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );
}
export default Button;