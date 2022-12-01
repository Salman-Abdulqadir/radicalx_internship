import React from "react";

//styled component
import styled from "styled-components";

//images and icons
import radicalxLogo from "../images/radicalxLogo.png";

const Login = () => {
  return (
    <StyledLogin>
      <div className="login-empty-div"></div>
      <StyledForm>
        <div className="logo">
          <img src={radicalxLogo} alt="" />
        </div>
        <div className="form">
          <h3>Login</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="flex">
            <div className="flex">
              <input checked type="checkbox" /> Remeber me
            </div>
            <p>Forgot password?</p>
          </div>
          <button>Login</button>
        </div>
      </StyledForm>
    </StyledLogin>
  );
};

//styled components
const StyledLogin = styled.div`
  display: flex;
  .login-empty-div {
    flex: 1;
  }
  gap: 2rem;
  min-height: 100vh;
`;
const StyledForm = styled.div`
  padding: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo {
    margin: auto;
    flex: 1;
  }
  .form {
    flex: 2;
    min-height: 20vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 1rem;
    .flex p {
      color: #793ef5;
    }
  }
`;
export default Login;
