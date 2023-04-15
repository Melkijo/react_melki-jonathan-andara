import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const dummyUser = { email: "admin@mail.com", password: "password123" };

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      navigate("/form");
    } else {
      alert("email atau password salah!");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="d-flex flex-column ">
        <h1>Welcome</h1>
        <form onSubmit={handleLogin} style={{ width: 500 }}>
          <div className="form-group row mb-2">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row  mb-2">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <button type="reset" className="btn btn-warning">
              Clear
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
