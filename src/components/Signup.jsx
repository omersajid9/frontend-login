import react, { useState } from 'react'

function Signup() {
    return (
        <div className="selection:bg-indigo-500 selection:text-white">
            <div className="flex items-center justify-center">
                <div className="flex-l p-8 mx-auto overflow-hidden">
                    <div className="p-8">
                        <h1 className="my-10 text-5xl font-bold text-indigo-600">Create account</h1>
                        <form className="mt-12" action="" method="">
                            <div className="relative mt-10">
                                <input id="username" name="username" type="text" className="peer bg-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:outline-none" placeholder="Name" autoComplete="nope" />
                                <label htmlFor="username" className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"> Username </label>
                            </div>
                            <div className="relative mt-10">
                                <input id="email" name="email" type="text" className="peer bg-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:outline-none" placeholder="john@doe.com" autoComplete="nope" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"> Email address </label>
                            </div>
                            <div className="relative mt-10">
                                <input id="password" type="password" name="password" className="peer bg-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-indigo-600 focus:outline-none" placeholder="Password" autoComplete="nope" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"> Password </label>
                            </div>
                            <div className="text-center">
                                <button type="button" className="text-sm round-full hover:bg-orange-600 mx-auto mt-10 cursor-pointer rounded-full bg-orange-400 py-4 px-6 font-semibold uppercase text-white transition-transform active:scale-110 active:bg-orange-500 active:outline-none active:ring active:ring-orange-500 active:ring-opacity-80 active:ring-offset-2">Connect to Meta Mask</button>
                            </div>
                            <input type="submit" value="Sign up" className="mt-16 block w-full cursor-pointer rounded-full bg-indigo-600 px-8 py-4 text-center font-semibold uppercase text-white hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-80 focus:ring-offset-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup;