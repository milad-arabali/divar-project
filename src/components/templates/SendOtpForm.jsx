import React from 'react';
import {useTranslation} from "react-i18next";
import {sendOtp} from "../../services/auth.js";

function SendOtpForm({setStep, mobile, setMobile}) {
    const {t, i18n} = useTranslation();
    const eventHandler = async (event) => {
        event.preventDefault();
        if (mobile.length !== 11) return;
        const {response, error} = await sendOtp(mobile);
        if (response) setStep(2);
    }
    return (

        <form onSubmit={eventHandler}>
            <p>{t('auth.loginTitle')}</p>
            <span>{t('auth.authText')}</span>
            <label htmlFor="input">{t('auth.enterPhone')}</label>
            <input type="text" id="input" value={mobile} placeholder={t('auth.PhoneNumber')}
                   onChange={e => setMobile(e.target.value)}/>
            <button type="submit">{t('auth.sendCode')}</button>
        </form>);
}

export default SendOtpForm;
