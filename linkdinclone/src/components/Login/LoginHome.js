import React from 'react';
import './LoginHome.css';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, googleProvider } from '../../firebase';

function LoginHome() {

	const dispatch = useDispatch();

	const signInWithGoogle = () => {
		auth.signInWithPopup(googleProvider).then((result) => {
			(login({
				email: result.user.email,
				uiddispatch: result.user.uid,
				displayName: result.user.displayName,
				profileUrl: result.user.photoURL,
			}))
		}).catch(error => alert(error));
	};

	return (
		<div className="container">
			<div className="nav">
				<a href="/">
					<img className='logoimage' src="/images/login-logo.svg" alt="" />
				</a>
				<div>
					<Link to={{ pathname: "/signup" }}>
						<span className="nav-button-join">Join now</span>
					</Link>
					<Link to={{ pathname: "/signin" }}>
						<button className="nav-button-signin" type="button">Sign in</button>
					</Link>
				</div>
			</div>
			<div className="section">
				<div className="hero">
					<h1>Welcome to your professional community</h1>
					<img src="/images/login-hero.svg" alt="Welcome to your professional community" />
				</div>
				<div className="intent-module">
					<ul>
						<a>
							<ArrowRightIcon style={{ fontSize: 60 }} />Search for a job</a>
						<a href>
							<ArrowRightIcon style={{ fontSize: 60 }} />Find a person you know
						</a>
						<a>
							<ArrowRightIcon style={{ fontSize: 60 }} />
							Learn a new skill
						</a>
					</ul>
					<button type="button" onClick={signInWithGoogle}>
						<img src="../images/google.svg" alt="Google-Logo"></img> Sign in with Google</button>
				</div>

			</div>
		</div>
	);
}

export default LoginHome;
