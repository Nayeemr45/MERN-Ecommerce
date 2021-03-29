import React , { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Input from './Input'
import '../../asset/css/auth.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sellerSignin, sellerSignup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', type: 'seller' };

const AuthSeller = () => {
    const [isSellerSignup, setisSellerSignup] = useState(false);
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();


    const switchMode = () => {
    setForm(initialState);
    setisSellerSignup((previsSellerSignup) => !previsSellerSignup);
    // setShowPassword(false);
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
         if (isSellerSignup) {
      dispatch(sellerSignup(form, history));
    } else {
      dispatch(sellerSignin(form, history));
    }
    }
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    //const handleChange = (e) => {}
    return (
        <Container>
        {isSellerSignup ? (
            <div className="auth-label">Seller- Sign Up</div>
        ) : (
            <div className="auth-label">Seller- Sign In</div>
        )}
            <form onSubmit={handleSubmit}>
                { isSellerSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} type="text"/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange}  type="text"/>
                </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type="password" />
                { isSellerSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                <Button type="submit"  variant="primary">
                    { isSellerSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <Button onClick={switchMode} variant="secondry">
                    { isSellerSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </Button>
            </form>
        </Container>
    )
}

export default AuthSeller
