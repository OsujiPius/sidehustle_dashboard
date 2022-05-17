import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (
      form.name !== "" &&
      form.country !== "" &&
      form.address !== "" &&
      form.email !== "" &&
      form.phoneNumber !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));

    toast.info(`Welcome to Admin Dashboard`);

    setTimeout(() => {
      window.location = "/";
    }, 5000);
  };

  return (
    <div className="auth_signup">
      <ToastContainer />

      <div>
        <h1 style={{ color: "#105BAA" }}> Login</h1>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            required
            placeholder="Password"
            name="phoneNumber"
            onChange={handleChange}
          />

          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <input
              type="checkbox"
              style={{ width: "25px", margin: "-7px 7px 0 0" }}
              id="readTerms"
            />
            <p>
              I have read, understood and i agree to the terms and conditions
            </p>
          </div>
          <button
            style={{ background: "#105BAA" }}
            className={formValid ? "auth_signup-active" : "auth_signup-submit"}
            // type="submit"
            // id="actionBtn"
            // disabled={!formValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
