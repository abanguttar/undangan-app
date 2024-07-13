export default function Flower2({ name }) {
    return (
        <img
            src="/cache/flower-2.png"
            className={`flower-transition-${name}`}
            style={{ marginRight: "-10px" }}
            width={"100px"}
            alt="flower-transition"
        />
    );
}
