import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const def_token = 'SECRET_PASSWORD';
const def_username = 'test';
const def_password = 'test';

const useCheckToken = () => {
    const navigate = useNavigate()
    const savedToken = localStorage.getItem('token');
    const isLoggedIn = savedToken && savedToken === def_token;

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/ExpenseTracker')
        }
    }, isLoggedIn)


    return isLoggedIn;
}

function Login() {

    const isLoggedIn = useCheckToken();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onContentChange = (content) => (e) => {
        const value = e.target.value;
        if (content === 'p') {
            setPassword(value);
        } else {
            setUsername(value);
        }
    };

    const onSubmitClick = () => {

        //  Set initial error values to empty
        setUsernameError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === username) {
            setUsernameError("لطفا نام کاربری خود را وارد نمایید")
            return
        }

        if (!/test/.test(username)) {
            setUsernameError("نام کاربری صحیح را وارد نمایید")
            return
        }

        if ("" === password) {
            setPasswordError("لطفا رمز عبور خود را وارد نمایید")
            return
        }


        if (!/test/.test(password)) {
            setPasswordError("رمز عبور صحیح را وارد نمایید")
            return
        }


        const isUserCorrect = username === def_username;
        const isPasswordCorrect = password === def_password;

        if (isUserCorrect && isPasswordCorrect) {
            localStorage.setItem('token', def_token)
        }

    }

    return (
        <div className="mainContainer">


            <img
                src="./images/user.png"
                alt="profile-img"
                className="profile-img-card"
            />

            <div className="titleContainer">
                <div>ورود به سیستم</div>
            </div>
            <br />

            {/* {isLoggedIn ? '<< وارد شده >>' : '<< وارد نشده >>'} */}

            <div className="inputContainer">
                <input
                    value={username}
                    placeholder="نام کاربری..."
                    className="inputBox"
                    onChange={onContentChange('u')}
                />

                <label className="errorLabel">{usernameError}</label>

            </div>
            <br />

            <div className="inputContainer">
                <input
                    value={password}
                    placeholder="رمز عبور..."
                    className="inputBox"
                    onChange={onContentChange('p')} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />


            <div className="inputContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onSubmitClick}
                    value={isLoggedIn ? 'خروج' : 'ورود'}
                />
            </div>

            <div className="guideLine">
                <img
                    src="./images/Guide.png"
                    alt="profile-img"
                    className="guideImg"
                />
                <div className="guideNote">
                    <span>
                        نام کاربری : test
                    </span>
                    <span>
                        رمز عبور : test
                    </span>
                    <span>
                        ♦ لطفا پس از وارد کردن مشخصات، صفحه ی مرورگر را refresh نمایید.
                    </span></div>
            </div>
        </div >
    )
}

export default Login