import React, { useEffect, useState } from "react";
import { redirect, Link, useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [validCheck, setValidCheck] = useState(false);
    const [cpassCheck, setcpCheck] = useState(false);
    const [npassCheck, setnpCheck] = useState(false);
    const [hide, setHide] = useState(true);
    const [user_name, setName] = useState("");
    const [isAvail, setAvail] = useState(false);
    const [isUserValid, setUserValid] = useState(false);
    const navigate = useNavigate();
    const [isloading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userCheck(user_name);
    }, [user_name])

    const validateUser = (input) => {
        const regex = /^[a-zA-Z][a-z0-9_]{5,12}$/;
        return !/\s/.test(input) && regex.test(input);
    }
    const userCheck = async (user) => {
        console.log(user)
        const params = {
            user_name: user
        }
        const response = await axios.get(`${process.env.REACT_APP_URL}/user/userIdCheck`,
            {
                params
            })
            .then((res) => res).catch((err) => console.log(err));

        console.log(response.data.user_check);
        setAvail(response.data.user_check);
        if (user_name == "") {
            setAvail(false);
        }
        return response.data.user_check;
    }

    const notify = (inp, success) => {
        if (success) {
            toast.success(inp, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error(inp, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }

    const createUser = async (e) => {

        const params = {
            user_name: user_name,
            password: password
        }
        setLoading(true);
        await axios.get(`${process.env.REACT_APP_URL}/user/addUser`, {
            params
        }).then((res) => {
            setTimeout(function () {
                navigate("/login")
            }, 2000);
            setSuccess(true);
            setLoading(false);
            notify(res.data.success ? "User creation Successful" : "User Creation is Not Succcessful Try Again", res.data.success);
        })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="open-sans fw-bolder ">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="container d-flex align-items-center justify-content-center" >
                <form className=" col-sm-5 col-lg-4 col-xl-4 p-4" >
                    <div className="text-center">
                        <Link to="/"><img src={"jntugv-footer.png"} alt="Your Image" style={{ width: "100px", cursor: "pointer" }} class="img-fluid" /></Link>
                    </div>
                    <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center ">FINANCE CLUB <br /><span className="color-1"> REGISTRATION</span></p>

                    <div class="input-group has-validation mb-3 open-sans fw-bolder text-secondary">
                        <div class="form-floating is-invalid">
                            <input type="text" class={`form-control fw-bolder open-sans ${!isAvail && user_name.length > 0 && validateUser(user_name) ? "is-valid" : "is-invalid"} text-lowercase`} id="floatingInputGroup2" placeholder="Username" value={user_name} onChange={(e) => { setName((e.target.value).toLowerCase()); }} required />
                            <label for="floatingInputGroup2" >Username</label>
                        </div>
                        <div className={`${!user_name.length > 0 ? "invalid-feedback" : "d-none"}`}>
                            Enter username
                        </div>
                        <div className={`${(!validateUser(user_name) && user_name.length > 0) ? "invalid-feedback" : "d-none"}`}>
                            Username should be in range(6,10), start with a letter and consists only numbers, letters and _
                        </div>
                        <div class={`${isAvail ? "invalid-feedback" : "d-none"}`}>
                            Username alredy exists
                        </div>

                    </div>
                    <div class="input-group has-validation mb-3 open-sans fw-bolder text-secondary">
                        <div class="form-floating is-invalid">
                            <input type={`${hide ? "password" : "text"}`} class={`form-control fw-bolder open-sans ${npassCheck ? "is-valid" : "is-invalid"}`} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingInputGroup2" placeholder="Username" required autoComplete="off" />
                            <label for="floatingInputGroup2" >Password</label>
                        </div>
                        <span className="input-group-text bg-white"><i class={`bi bi-eye${hide ? "-slash" : ""} cursor-pointer`} onClick={(e) => { setHide((prev) => !prev) }}></i></span>
                    </div>
                    <div class="input-group has-validation mb-3 open-sans fw-bolder text-secondary">
                        <div class="form-floating">
                            <input type="text" class={`form-control fw-bolder open-sans ${cpassCheck ? "is-valid" : "is-invalid"}`} value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} id="floatingInputGroup2" placeholder="Username" required autoComplete="off" />
                            <label for="floatingInputGroup2" >Confirm Password</label>
                        </div>
                    </div>
                    <div className="d-flex row ">
                        <div className="text-center col mb-2">
                            Already have an account ? <a href="/login" className="fw-bold">Login</a>
                        </div>
                    </div>
                    <PasswordChecklist
                        rules={["minLength", "maxlength", "specialChar", "number", "capital", "match"]}
                        minLength={6}
                        maxLength={16}
                        value={password}
                        valueAgain={passwordAgain}
                        onChange={(isValid) => { setValidCheck(isValid) }}
                        messages={{
                            minLength: "Password should at least 6 charectars and At most 16 charectars",
                            specialChar: "Password should at least One Special Charectar",
                            number: "Password should at least One Number",
                            capital: "Password should at least One Capital Letter",
                            match: "Both Passwords should match",
                        }}
                        className="text-left"
                    />
                    <PasswordChecklist
                        rules={["match"]}
                        minLength={6}
                        maxLength={16}
                        value={password}
                        valueAgain={passwordAgain}
                        onChange={(isValid) => { setcpCheck(isValid) }}
                        className="d-none"
                    />
                    <PasswordChecklist
                        rules={["minLength", "specialChar", "number", "capital"]}
                        minLength={6}
                        maxLength={16}
                        value={password}
                        onChange={(isValid) => { setnpCheck(isValid) }}
                        className="d-none"
                    />

                    <div className="text-center">
                        {
                            isloading ? <button className="btn btn-outline-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            </button> :
                                <button class={`btn btn-outline-primary fw-bolder ${validCheck && !isAvail && user_name.length > 0 && validateUser(user_name) ? "" : "disabled"}`} onClick={(e) => {
                                    e.preventDefault();
                                    createUser();
                                }}   >
                                    {success ? <i className="bi bi-check"></i> : "Register"}
                                </button>
                        }
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Register;