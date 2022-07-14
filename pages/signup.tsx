import React from 'react'

type SignupProps = {}

const Signup = (props: SignupProps) => {
  return (
    <div><div className='text-center'>
      <h2 className='p-12'>Đăng ký</h2>
      <form action="" className=''>
        <input type="text" placeholder='email' className='border border-black-300 p-2' /><br />
        <input type="password" placeholder='password' className='border border-black-300 p-2' /><br />
        <button>sigin</button>
      </form>
    </div></div>
  )
}

export default Signup