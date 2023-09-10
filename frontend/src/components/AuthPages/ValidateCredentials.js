
export default function ValidateCredentials(credentials) {
  
  let errorList = []
  const { username, mobile, email, password, termsChecked } = credentials
  console.log(credentials)

  if (mobile !== null && mobile.length<10) {
    errorList.push("Mobile should have minimum length 10")
  }

  if (password !== null) {
    if (password.length === 0) {
      errorList.push("Password should not be empty");
    }

    if (password.length < 8) {
      errorList.push("Password should have more minimum 8 char");
    }

    let specialCharCount = 0;
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    let numberCount = 0;

    const specialChars = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "[",
      "{",
      "]",
      "}",
      ":",
      ";",
      "<",
      ">",
    ];

    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (specialChars.includes(char)) {
        specialCharCount++;
      }
      if (password[i] === password[i].toUpperCase()) {
        upperCaseCount++;
      }
      if (password[i] === password[i].toLowerCase()) {
        lowerCaseCount++;
      }
      if (password[i] == parseInt(password[i])) {
        numberCount++;
      }
    }

    if (specialCharCount === 0) {
      errorList.push("Password must have 1 special character");
    }

    if (upperCaseCount === 0) {
      errorList.push("Password must have 1 uppercase character");
    }

    if (lowerCaseCount === 0) {
      errorList.push("Password must have 1 lowercase character");
    }

    if (numberCount == 0) {
      errorList.push("Password must have 1 Numeric char");
    }
  }

  if (email !== null) {
    if (email.length === 0) {
      errorList.push("Email should not be empty");
    }

    let mailCount = 0;

    const mails = ["@gmail", "@yahoo", "@ibm"];

    for (let i = 0; i < mails.length; i++) {
      const mail = mails[i];
      if (email.includes(mail)) {
        mailCount++;
      }
    }

    if (mailCount === 0) {
      errorList.push("Email should include 1 mail type address");
    }

    if (mailCount > 1) {
      errorList.push("Email should include only 1 mail type address");
    }
  }

  if (termsChecked !== null && termsChecked === false) {
    errorList.push("Please check the terms & conditions to continue");
  }

  return errorList;
}
