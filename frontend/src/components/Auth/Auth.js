import React , { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Input from './Input'
import '../../asset/css/auth.css'
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);


    const switchMode = () => {
    //setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    //setShowPassword(false);
  };
    const handleSubmit = (e) => {}
    const handleChange = (e) => {}
    const handleShowPassword = (e) => {}
    return (
        <Container>
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
            <Button type="submit"  variant="primary" className="ww">
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
