import React from 'react'

type Props = {}

const Signin = (props: Props) => {
    return (
        <div className='text-center'>
            <h2 className='p-12'>Login</h2>
            <form action="" className=''>
                <input type="text" placeholder='email' className='border border-black-300 p-2' /><br />
                <input type="password" placeholder='password' className='border border-black-300 p-2' /><br />
                <button>sigin</button>
            </form>
        </div>
    )
}

export default Signin