import react, { useState } from 'react'
import Signup from './Signup';
import Signin from './Signin';
import SignupInvite from './SignupInvite';
import SigninInvite from "./SigninInvite"




function LoginPage() {
    const [isAnimated, setIsAnimated] = useState(true);
    const overlayBg = "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800"


    function onclick() {
        setIsAnimated(!isAnimated);
    }

    return (
        <div className="h-4/5 invisible sm:visible lg:w-3/6 w-4/5 bg-white relative overflow-hidden rounded-[30%]">
            <div
                id="signin"
                className={`bg-white rounded-full absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""
                    }`}>
                <Signin />
            </div>

            <div
                id="signup"
                className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated
                        ? "translate-x-full opacity-100 z-50 animate-show"
                        : "opacity-0 z-10"
                    }`}>
                    <Signup />
            </div>

            <div
                id="overlay-container"
                className={`rounded-full absolute top-0 left-1/2 w-1/2 h-full overflow-hidden  transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : ""
                    }`}
            >
                <div
                    id="overlay"
                    className={`${overlayBg} relative -left-full h-full w-[200%] transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0"
                        }`}
                >
                    <div
                        id="overlay-left"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%]"
                            }`}
                    >
                        <SigninInvite
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                            fun={onclick}
                        />
                    </div>
                    <div
                        id="overlay-right"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0"
                            }`}
                    >
                        <SignupInvite
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                            fun={onclick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;