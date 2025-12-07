import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { Title } from "react-head";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
  const captchaRaf = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // ---------
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "Login Success!",
        icon: "success",
        draggable: true,
      });
      navigate(from,{replace:true});
    });
  };
  const handleValidateCaptcha = () => {
    const value = captchaRaf.current.value;
    console.log(value);
    if (validateCaptcha(value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Title>CAFE-ALI | Login</Title>
      <div className=" hero bg-base-200 min-h-screen">
        <div className=" flex-wrap  px-2  md:hero-content  ">
          <div className="text-center md:w-1/2 flex flex-col">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className=" card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRaf}
                  name="captcha"
                  className="input"
                  placeholder="captcha"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-primary btn-xs"
                >
                  Validate
                </button>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </form>
                <div className="divider">OR</div>
              <div className="flex justify-center items-center">

              <SocialLogin></SocialLogin>
              </div>
              <p>
                <small>
                  New Here? Create an Account{" "}
                  <Link className="text-green-500 font-bold" to="/signup">
                    SignUp
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Login;
<h1>login</h1>;
