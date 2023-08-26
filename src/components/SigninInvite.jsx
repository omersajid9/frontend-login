import react from 'react'

export default function SigninInvite(props)
{
    return (
        <div className="">
            <div className="flex items-center justify-center p-8 text-center">
                <div className="items-center justify-center">
                <div className=" text-6xl text-white font-bold"> Already have an account ? </div>
                <div className="text-xl text-white text-center my-4"> Sign in with your email & password </div>
                <div className="mt-16 justify-center items-center mx-auto">
                <button onClick={props.fun} className="border-white rounded-full bg-transparent px-6 py-3 text-white font-bold ring-2 ring-white active:scale-110 transition-transform ease-in"> SIGN IN</button>
                </div>
                </div>
            </div>
        </div> 
    )
}