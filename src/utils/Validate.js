

const checkValidateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])/.test(password);

    if (!isEmailValid) return "Email id is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null
};


export default checkValidateData