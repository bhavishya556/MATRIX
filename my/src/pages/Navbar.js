import React from 'react';
import Select from 'react-select';
import './Navbar.css';
import Logo from "../comp/logo.png";

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
	const languages = [
		{ value: "php", label: "php" },
		{ value: "c_cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },

		{ value: "ruby", label: "Ruby" },
		{ value: "swift", label: "Swift" },
		{ value: "kotlin", label: "Kotlin" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]
	return (
		<div className="navbar">
			<div className='nav-logo-con nav-logo'>

				<img src={Logo} className='nav-logo foot-logo' alt="Logo" />
				<h3>Notion</h3>
			</div>
			<Select options={languages} value={userLang}
				onChange={(e) => setUserLang(e.value)}
				placeholder={userLang} className='select' />
			<Select options={themes} value={userTheme}
				onChange={(e) => setUserTheme(e.value)}
				placeholder={userTheme} className='select' />
			<label>Font Size</label>
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value) }}
				className='font-size' />
		</div>
	)
}

export default Navbar
