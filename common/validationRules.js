const LoginRules = {
    email: value => {
        if (value === "" || !value) return "E-mail is required";
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
    },
    password: value => {
        if (value === "" || !value) return "Password is required";
        return (value && value.length > 7) || "Password too short to match";
    }

};
const RegistrationRules = {
    name: value => {
        if (value === "" || !value) return "Name is required";
        return (value && value.length <= 12) || "Name must be less than 12 characters";
    },
    email: value => {
        if (value === "" || !value) return "E-mail is required";
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
    },
    password: value => {
        if (value === "" || !value) return "Password is required";
        return (value && value.length > 7) || "Weak Password, Must be atleast 8 characters";
    },
};

export {
    LoginRules,
    RegistrationRules
};