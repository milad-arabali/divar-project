import './App.css';
import './i18n';
import {useTranslation} from "react-i18next";
import AuthPage from "./pages/AuthPage.jsx";
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router.jsx";

function App() {

    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    };
    return (
        <>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <div style={{direction: i18n.language === 'fa' ? 'rtl' : 'ltr', padding: 20}}>
                <h1>{t('welcome')}</h1>
                <p>{t('greeting', {name: 'میلاد'})}</p>

                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fa')}>فارسی</button>
            </div>
            <AuthPage/>
            <p className="bg-yellow-400 text-black font-Vazir p-4">مثال</p>
        </>
    )
}

export default App
