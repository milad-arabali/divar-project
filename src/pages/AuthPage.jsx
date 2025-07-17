import React, {useState} from 'react';
import CheckOtpForm from "../components/templates/CheckOtpForm.jsx";
import SendOtpForm from "../components/templates/SendOtpForm.jsx";

export default AuthPage;

function AuthPage(props) {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [code, setCode] = useState("");
    const steps = {
        1: <SendOtpForm setStep={setStep}  mobile={mobile} setMobile={setMobile}  />,
        2: <CheckOtpForm setStep={setStep} />,
    };
    return (
        <>
            <div className="auth-page-container">
                {steps[step] || <p>Invalid step</p>}
            </div>
        </>

);
}
