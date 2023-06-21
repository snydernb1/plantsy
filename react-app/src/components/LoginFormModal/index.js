import React, { useState } from "react";
import { login } from "../../store/session";
import { signUp } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal({form}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [newEmail, setNewEmail] = useState("");
	const [newName, setNewName] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const [type, setType] = useState(form);
  const { closeModal } = useModal();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const handleSignUp = async (e) => {
		e.preventDefault();
		if (newPassword === newConfirmPassword) {
			const data = await dispatch(signUp(newName, newEmail, newPassword));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

  const demoSeller = () => {
    dispatch(login('demo@aa.io', 'password'))
    closeModal()
  }
  const demoShopper = () => {
    dispatch(login('bobbie@aa.io', 'password'))
    closeModal()
  }

  const changeForm = () => {
    setType(!type)
  }

  return (
    <section className="signInModal">
      <div className="paddingModalDiv">


      <div className="authTop">
        <h3 className="authTitle">{type === true ? 'Sign in': 'Sign up'}</h3>
        <button className="demoButton" id="authReg" onClick={changeForm}>{type === true ? 'Register': 'Sign in'}</button>
      </div>

      { type === true ?

      <form onSubmit={handleSignIn} className="signInForm">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="authLabel">
          Email address
        </label>
          <input
            className="authInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label className="authLabel">
          Password
        </label>
          <input
            className="authInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit" className="signInButton">Sign in</button>
      </form>
        :
        <form onSubmit={handleSignUp} className="signInForm">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label className="authLabel">
					Email address
        </label>
					<input
						type="text"
            className="authInput"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
						required
					/>
				<label className="authLabel">
					First name
        </label>
					<input
						type="text"
            className="authInput"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
						required
					/>
				<label className="authLabel">
					Password
        </label>
					<input
						type="password"
            className="authInput"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						required
					/>
				<label className="authLabel">
					Confirm password
        </label>
					<input
						type="password"
            className="authInput"
						value={newConfirmPassword}
						onChange={(e) => setNewConfirmPassword(e.target.value)}
						required
					/>
				<button type="submit" className="signInButton">Sign up</button>
			</form>
      }

        <div className="demoButtons">
          <button onClick={demoSeller} className="demoButton">Demo seller</button>

          <button onClick={demoShopper} className="demoButton">Demo shopper</button>
        </div>

        </div>

        <div id="demoButton"></div>
        <p id="signInOr">OR</p>

        <a href='https://github.com/snydernb1' target='_blank' className="githubLink">
          <i className="fa fa-github" />
          <p>Nick Snyder</p>
        </a>

        <p id="disclaimer">* By clicking sign in or creating a new account, you are not agreeing to anything. Plantsy will not contact you for any reason.</p>

    </section>
  );
}

export default LoginFormModal;
