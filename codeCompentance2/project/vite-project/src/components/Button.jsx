export default function Button(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: "#01CC8E",
          color: "white",
          fontSize: 18,
          fontWeight: 500,
          padding: "10px 15px",
          border: "none",
          borderRadius: 5,
          filter: "drop-shadow(-4px 4px 4px #2f2f2f1e)",
        }}
        type="button"
      >
        {props.text}
      </button>
    </>
  );
}
