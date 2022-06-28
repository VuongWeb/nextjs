import React from 'react'
import style from './Header.module.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <ul className='bg-blue-300 flex p-4 space-x-5'>
                <li><a href="" className='hover:bg-green-600 hover:text-yellow-400'>menu 1</a></li>
                <li><a href="" className='hover:bg-green-600 hover:text-yellow-400'>menu 2</a></li>
                <li><a href="" className='hover:bg-green-600 hover:text-yellow-400'>menu 3</a></li>
                <li><a href="" className='hover:bg-green-600 hover:text-yellow-400'>menu 4</a></li>
            </ul>
        </div>
    )
}

export default Header