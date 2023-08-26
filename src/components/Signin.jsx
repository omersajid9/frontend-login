import react, { useState } from 'react'

function Signin() {

  async function getAccount()
  {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0])
    return accounts[0]
  }


  return (
    <div className="selection:bg-black selection:text-indigo-400">
      <div className="flex items-center justify-center">
        <div className="flex-l mx-auto overflow-hidden p-8">
          <div className="p-8 ">
            <h1 className="my-10 text-5xl font-bold text-indigo-600">Welcome Back!</h1>

            <form className="mt-12">
              <div className="relative mt-10">
                <input type="text" className="bg-transparent peer h-10 w-full border-b-2 placeholder-transparent focus:border-indigo-600 focus:outline-none" autoComplete="nope" placeholder="Email Address" />
                <label className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"> Username </label>
              </div>
              <div className="relative mt-10">
                <input type="password" className="bg-transparent peer h-10 w-full border-b-2 placeholder-transparent focus:border-indigo-600 focus:outline-none" autoComplete="nope" placeholder="Email Address" />
                <label className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"> Password </label>
              </div>
              <div className="text-center">
                <button type="button" onClick={getAccount} className="mt-10 mx-auto rounded-full bg-orange-400 px-6 py-4 font-semibold uppercase text-white hover:bg-orange-600 active:scale-110 active:bg-orange-600 active:ring-2 active:ring-orange-600 active:ring-offset-2">Connect to meta mask</button>
              </div>
              <div className="text-center">
                <button type="button"  className="my-10 mx-auto w-full rounded-full bg-indigo-600 px-6 py-4 font-semibold uppercase text-white hover:bg-indigo-400 active:scale-110 active:bg-indigo-600 active:ring-2 active:ring-indigo-600 active:ring-offset-2">Log in</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Signin;