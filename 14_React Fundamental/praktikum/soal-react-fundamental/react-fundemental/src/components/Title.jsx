import bootstrapLogo from "../assets/bootstrapLogo.png";
export default function Title() {
  return (
    <>
      <div className="container text-center w-50 mt-5">
        <img src={bootstrapLogo} alt="" />
        <h1>Create Product</h1>
        <p>
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </>
  );
}
