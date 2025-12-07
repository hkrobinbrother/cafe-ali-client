import { useContext } from "react";
import { Title } from "react-head";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { crateUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    crateUser(data.email, data.password).then((result) => {
      const loggerUser = result.user;
      console.log(loggerUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added the database')
              reset();

              Swal.fire({
                title: "user crate success",
                icon: "success",
                draggable: true,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Title>CAFE-ALI | SignUP</Title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="text-center md:text-left w-1/2 ">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  name="photo"
                  {...register("PhotoURL", { required: true })}
                  className="input"
                  placeholder="PhotoURL"
                />
                {errors.PhotoURL && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">6 digit is required</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">10 digit is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">all required</p>
                )}
                <div></div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sing Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
