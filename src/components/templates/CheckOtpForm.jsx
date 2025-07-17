import React from 'react';
import {useTranslation} from "react-i18next";
import {checkOtp} from "../../services/auth.js";
import setCookie from "../../util/cookie.js";

function CheckOtpForm({setStep, code, setCode, mobile}) {
    const {t} = useTranslation();
    const eventHandler = async (event) => {
        event.preventDefault();
        console.log({mobile, code})

        if (code.length !== 5) return;
        const {response, error} = await checkOtp(mobile, code);
        if (response) {
            setCookie(response);
        } else if (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={eventHandler}>
            <p>{t('auth.verifyCodeTitle')}</p>
            <span>{t('auth.verifyCodeMessage', {number: mobile})}</span>
            <label htmlFor="otpInput">{t('auth.enterCode')}</label>
            <input
                type="text"
                id="otpInput"
                value={code}
                placeholder={t('auth.codePlaceholder')}
                onChange={e => setCode(e.target.value)}
                inputMode="numeric"
                maxLength={6}
                autoFocus
            />
            <button type="submit">{t('auth.submit')}</button>
            <button type="button" onClick={() => setStep(1)}>
                {t('auth.changeMobile')}
            </button>
        </form>
    );
}

export default CheckOtpForm;
