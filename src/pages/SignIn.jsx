import React from 'react'


function SignIn() {
    return (
        <div className='items-center text-center pt-16 max-w-md m-auto text-white'>
            <h1 className='text-3xl font-medium py-6'>Sign in</h1>
            <form>
                <label class="block text-start my-2 p-2 ">
                    <span class="block text-sm font-medium">Username</span>
                    <input type="text" class="peer my-2 p-2 w-full text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 focus:ring-lime-500 block rounded-md sm:text-sm focus:ring-1" placeholder='example' />
                </label>
                <label class="block text-start my-2 p-2">
                    <span class="block text-sm font-medium">Password</span>
                    <input type="password" class="peer my-2 p-2 w-full text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 focus:ring-lime-500 block rounded-md sm:text-sm focus:ring-1" placeholder='******' />
                </label>
                <input className='bg-lime-600 rounded-3xl cursor-pointer my-4 p-2 w-full' type="submit" value="Submit" />
            </form>
            <div class=" text-center my-2 p-2 ">
                <span>Do not have any account?</span>
                <button className='font-extrabold pl-2'>Sign up now</button>
            </div>
        </div>
    )
}

export default SignIn
