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

const checkOtp = async (mobile, code) => {
    try {
        const response = await api
            .post("auth/check-otp", {mobile, code});
        return {response: response.data};
    } catch (error) {
        return {error: error.response?.data?.message || error.message};
    }
}

export {sendOtp, checkOtp};
