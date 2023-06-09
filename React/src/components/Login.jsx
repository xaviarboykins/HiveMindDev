import { React, useState, useRef } from "react";
import { styles } from "../styles";
import * as usersAuthService from "../services/usersAuthService";
import { useNavigate } from "react-router";

const Login = () => {
     const initialFormData = { userName: "", password: "" };
     const [formData, setFormData] = useState(initialFormData);
     const formRef = useRef();
     const navigate = useNavigate();

     const handleChange = (e) => {
          const { name, value } = e.target;

          setFormData({ ...formData, [name]: value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();

          console.log(formData);
          usersAuthService.userLogin(formData).then(onUserLoginSuccess).catch(onUserLoginError);
     };

     const onUserLoginSuccess = (response) => {
          console.log(response);
          setFormData(initialFormData);
          navigate("/dashboard");
     };

     const onUserLoginError = (err) => {
          console.error({ error: err });
     };
     return (
          <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 items-center`}>
               <div className="flex-[0.75] bg-secondary p-8 rounded-2xl">
                    <h3 className={styles.sectionHeadText}>Login.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                         <label htmlFor="userName" className="flex flex-col">
                              <span className="text-black font-medium mb-4">Username</span>
                              <input
                                   type="email"
                                   name="userName"
                                   value={formData.userName}
                                   placeholder="Enter User Name"
                                   className="bg-primary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
                                   onChange={handleChange}
                              />
                         </label>
                         <label htmlFor="password" className="flex flex-col">
                              <span className="text-black font-medium mb-4">Password</span>
                              <input
                                   type="password"
                                   name="password"
                                   value={formData.password}
                                   placeholder="Enter password"
                                   className="bg-primary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
                                   onChange={handleChange}
                              />
                         </label>

                         <button
                              type="submit"
                              className="bg-black py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-tertiary"
                         >
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Login;
