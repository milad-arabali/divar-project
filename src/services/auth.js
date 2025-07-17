import api from "../configs/api.js";

const sendOtp = async (mobile) => {
    try {
        const response = await api
            .post('auth/send-otp', {mobile});
        return {response}

    } catch (error) {
        return {error: error.message}
    }
}


export {sendOtp};
