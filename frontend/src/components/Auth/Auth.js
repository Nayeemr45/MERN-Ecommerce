import React , { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import Input from './Input'
import '../../asset/css/auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import Menu from '../nav/Menu';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = ({ location, history }) => {
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/Auth'
    const userAuth = useSelector((state) => state.auth)
    const {authData} = userAuth

    console.log(userAuth)
    console.log(authData)
    const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // setShowPassword(false);
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
    }
    useEffect(() => {
        
        if (authData) {
          history.push(redirect)
        }
        
      }, [history, authData, redirect])
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    //const handleShowPassword = (e) => {}
    return (
        <Container>
        <Menu />
        {isSignup ? (
            <div className="auth-label">Sign Up</div>
        ) : (
            <div className="auth-label">Sign In</div>
        )}
            <form onSubmit={handleSubmit}>
                { isSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} type="text"/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange}  type="text"/>
                </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type="password" />
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                <Button type="submit"  variant="primary">
                    { isSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <Button onClick={switchMode} variant="secondry">
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </Button>
            </form>
        </Container>
    )
}

export default Auth
