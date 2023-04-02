export default function BtnSubmit(props) {
  return (
    <div className="d-grid mt-5">
      <button className="btn btn-primary" id={props.id} type="submit">
        {props.title}
      </button>
    </div>
  );
}
