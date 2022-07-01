import Link from 'next/link'
import React from 'react'
import style from './Header.module.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex bg-blue-300'>
            <div className="img ">
                <img src="#" alt="" />
            </div>
            <ul className=' flex p-4 space-x-5'>
                <li><Link href="#" className='hover:bg-green-600 hover:text-yellow-400'>menu 1</Link></li>
                <li><Link href="#" className='hover:bg-green-600 hover:text-yellow-400'>menu 2</Link></li>
                <li><Link href="#" className='hover:bg-green-600 hover:text-yellow-400'>menu 3</Link></li>
                <li><Link href="#" className='hover:bg-green-600 hover:text-yellow-400'>menu 4</Link></li>
            </ul>
        </div>
    )
}

export default Header