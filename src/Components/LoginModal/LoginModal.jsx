import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Ecomm_Logo } from '../../assets/Image';
import { Link } from 'react-router-dom';
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';


export const LoginModal = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [err, setErr] = useState(null);

    const disptch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: inputs.email,
            password: inputs.password
        })
        if (data.user) {
            setErr(null)
            console.log(data);
            disptch(setUser(data.user))
            setInputs({
                email: "",
                password: ""
            })
        } else if (error.message) {
            setErr(error.message);
        }
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: inputs.email,
            password: inputs.password
        })
        console.log(data, error);
        if (error.message) {
            setErr(error.message);
        }
        setInputs({
            email: "",
            password: ""
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Body className="p-0">
                <div>
                    <div className="row g-0">
                        <div className="col-md-5 bg-primary">
                            <div className="d-flex flex-column justify-content-evenly p-3 h-100">
                                <div className='text-white'>
                                    <h2>{isLogin ? "Login" : "SignUp"}</h2>
                                    <p>Get access to your Orders, WishList and Recomdations</p>
                                </div>
                                <img className='col-5 mx-auto' src={Ecomm_Logo} alt={Ecomm_Logo} />
                            </div>
                        </div>
                        <div className="col-md-7 p-5">
                            <form onSubmit={isLogin ? handleLogin : handleSignUp}>
                                <div className="mb-3">
                                    <label htmlFor="loginMail" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control shadow-none"
                                        id="loginMail" name='email' value={inputs.email || ""} onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loginPassword" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control shadow-none"
                                        id="loginPassword" name='password' value={inputs.password || ""} onChange={handleChange}
                                    />
                                </div>
                                {err && <span className='text-danger'>{err}</span>}
                                <p>By countuing, You agree to Flipkart's <span className='text-primary'>Terms of use</span> and <span className='text-primary'>Privacy Policy</span></p>
                                <button className='btn btn-secondary w-100 rounded-0 py-2'>{isLogin ? "Login" : "SignUp"}</button>
                            </form>
                            <div className="pt-5 text-center mt-5">
                                <Link onClick={() => setIsLogin((prev) => !prev)} className="text-decoration-none">{isLogin ? "New to Flipkart? Create an Account" : "Already Have an Account? Login"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='position-absolute end-0 top-0 btn btn-danger rounded-start-pill px-3 py-2' onClick={props.onHide}>x</button>
            </Modal.Body>
        </Modal>
    )
}
