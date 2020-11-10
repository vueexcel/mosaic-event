import userModule from "./modules/user.module.js";
import eventModule from "./modules/event.module.js";
import eventDetails from "./modules/eventdetails.module.js";
import eventRegister from "./modules/eventregister.module.js";
import errorMessage from "./modules/errormessage.module.js";
import loginModule from "./modules/login.module.js";
import registration from "./modules/registration.module.js";

export default ({
    modules: {
        userModule, eventModule, eventDetails, eventRegister,
        errorMessage, loginModule, registration
    },
})