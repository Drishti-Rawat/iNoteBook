import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../config/api";
import { useNavigate } from "react-router-dom";
import img from "../assets/illustration.png";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const response = await loginUser({ email: Email, password: Password });
    console.log(response);
    if (response.success === true) {
      localStorage.setItem("token", response.authtoken);
      console.log(
        "token set",
        localStorage.setItem("token", response.authtoken)
      );
      navigate("/mynotes");
    } else {
      setError("Invalid credentials");
    }
    return response;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="flex flex-col   py-3 gap-8 ">
      <div className="flex justify-between items-center py-1 px-20 shadow-md shadow-slate-200">
        <Link to="/">
          <h3 className="text-black text-2xl font-bold tracking-widest">
            iNotebook
          </h3>
        </Link>
        <h2 className="text-[12px] font-medium">Access your notes with ease</h2>
      </div>

      {/* login  */}
      <div className="flex justify-center gap-4 items-center xl:px-16 md:px-4   ">
        <div className="flex-1 hidden md:block  bg-[#cee3f2] rounded-3xl shadow-lg shadow-[#80a6c1]  py-10">
          <div className="flex  flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-2xl text-2xl font-extrabold  tracking-wider">
                Add, Edit, Delete notes
              </h2>
              <h3 className="md:text-md xl:text-xl  font-semibold">
                Store all your notes securely in the cloud.
              </h3>
            </div>

            <div>
              <img src={img} alt="img" width={350} height={350} />
            </div>

            <div className="py-3">
              <h2 className="text-md font-normal">
                Organize your notes effortlessly
              </h2>
            </div>
          </div>
        </div>

        <div className="flex-1  flex justify-center items-center py-16">
          <div className="flex flex-col justify-center items-center gap-10   rounded-lg shadow-sm shadow-slate-300 px-12 md:px-7 xl:px-14 py-10 ">
            <div className="flex flex-col justify-center items-center gap-2">
              
              <h2 className="xl:text-3xl  md:text-2xl text-3xl font-bold ">Welcome Back</h2>
              <p className="text-sm ">Enjoy Unlimited note storage.</p>
             
              
            </div>

            <div className="flex-grow">
              <form
                className="flex flex-col max-w-md mx-auto gap-4 px-3  py-2 "
                onSubmit={handleLogin}
              >
                <div className="flex flex-col  gap-1 w-full ">
                  <label htmlFor="email">Email <span className="text-red-600 px-2">*</span></label>
                  <input
                    autoComplete="email"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={Email}
                    type="email"
                    placeholder="Email "
                    className=" w-[300px] rounded-2xl shadow-md shadoow-gray-300  outline-none py-2 px-3  text-[15px] bg-gray-100 border-b  text-gray-900"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password">Password <span className="text-red-600 px-2">*</span></label>
                

                <input
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  value={Password}
                  type="password"
                  placeholder="password "
                  className=" w-full rounded-2xl  shadow-md shadoow-gray-300  outline-none py-2 px-3  text-[15px] bg-gray-100 border-b  text-gray-900"
                />
                {error && (
                  <div>
                    <h2 className="text-sm text-red-700">{error}</h2>
                  </div>
                )}
                </div>

              

                <button
                  type="submit"
                  className="bg-[#0095f6] rounded-2xl  text-sm py-2 mt-2 text-white font-semibold cursor-pointer"
                >
                  Log in
                </button>


              </form>
            </div>

            <div>
              <h2 className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></h2>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Login;
