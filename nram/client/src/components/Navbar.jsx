import React from 'react'
import Switcher from './Switcher'

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full bg-slate-200/40 backdrop-blur dark:bg-slate-950/20 p-4 flex justify-between items-center'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl font-semibold'>N-RAM</div>

        <div className='flex gap-2'>
            <Switcher/>
        </div>
    </div>
  )
}
