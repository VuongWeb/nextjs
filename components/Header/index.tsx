import Link from 'next/link'
import React from 'react'
import style from './Header.module.scss'
type SigninProps = {}

const Header = (props: SigninProps) => {
    return (
        <div className='flex bg-blue-300'>
            <div className="img ">
                <img src="#" alt="" />
            </div>
            <ul className=' flex p-4 space-x-5'>
                <li><Link href="/products" className='hover:bg-green-600 hover:text-yellow-400'>products 1</Link></li>
                <li><Link href="/signin" className='hover:bg-green-600 hover:text-yellow-400'>đăng nhập</Link></li>
                <li><Link href="/signup" className='hover:bg-green-600 hover:text-yellow-400'>đăng ký</Link></li>
            </ul>
        </div>
    )
}

export default Header