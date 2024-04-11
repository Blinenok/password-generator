
// ГЕНЕРАТОР ПАРОЛЕЙ 

const includeLowerCase = document.getElementById("includeLowerCaseCheckBox");
const includeUpperCase = document.getElementById("includeUpperCaseCheckBox");
const includeNumbers = document.getElementById("includeNumbersCheckBox");
const includeSymbols = document.getElementById("includeSymbolsCheckBox");




function generatePassword() {

	const length = document.getElementById("textBox").value;
	const result = document.getElementById("result");
	const lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
	const UpperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+-="
	let includeLowerCaseChecked = false;
	let includeUpperCaseChecked = false;
	let includeNumbersChecked = false;
	let includeSymbolsChecked = false;
	let allowedChars = "";
	let password = "";

	if (includeLowerCase.checked) {
		includeLowerCaseChecked = true;
	}
	if (includeUpperCase.checked) {
		includeUpperCaseChecked = true;
	}
	if (includeNumbers.checked) {
		includeNumbersChecked = true;
	}
	if (includeSymbols.checked) {
		includeSymbolsChecked = true;
	}

	allowedChars += includeLowerCaseChecked ? lowerCaseChars : "";
	allowedChars += includeUpperCaseChecked ? UpperCaseChars : "";
	allowedChars += includeNumbersChecked ? numberChars : "";
	allowedChars += includeSymbolsChecked ? symbolChars : "";
	

	if (length <= 4) {
		result.textContent = "Длина пароля должна быть больше 4";
	}
	else if (allowedChars.length === 0) {
		result.textContent = "Должна быть включена хотя бы одна группа символов" ;
	}
	else {
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * allowedChars.length);
			password += allowedChars[randomIndex];
		}

		result.textContent = `Ваш пароль: ${password}`;
	}
}




	