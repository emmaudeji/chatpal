'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar, { SidebarItem } from './Sidebar';
import Link from 'next/link';
import { navlinks } from '@/data';
import Image from 'next/image';


const Layout: React.FC<{children:React.ReactNode}> = ({children}) => {
  const pathname = usePathname();

  return (
    <React.Fragment> 
    <main className="hidden sm:flex gap-0 ">
      <Sidebar >
        <nav className='shrink-0 sticky top-0'>
          {
            navlinks.map(({ icon, text, path, alert }, idx) => {
            const Icon = icon
              return (
                <SidebarItem
                  key={idx}
                  text={text}
                  path={path}
                  icon={<Icon className={`${pathname===path?'text-blue-800':''} group-hover:text-blue-800 duration-300 `}/>}
                  active={pathname === path}
                  alert={alert}
                />
            )})
          }
        </nav>
      </Sidebar>
      <article className='w-full py-8'>
        {children}
      </article>
    </main>

    <footer className='bg-white z-50 sm:hidden border-t fixed bottom-0 w-full p-6 rounded-t-[2rem] shadow-2xl flex gap-3 items-center justify-between flex-nowrap '>
          <div 
           className="w-5 h-5 shrink-0 overflow-hidden">
            <Image src={'/chatpal.png'} alt='logo' width={150} height={150} className='object-contain w-full h-full shrink-0'/>
          </div>
      {
        navlinks?.map(({ icon, text, path, alert }, idx)=>{
          const Icon = icon
          return (
            <Link href={path} key={idx} className="relative group w-full flex justify-center">
              <div className='tooltip 
                absolute  rounded-md px-2 py-1
                bg-blue-100 text-blue-800 text-[10px]
                invisible opacity-20 translate-y-0 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:-translate-y-6
                text-nowrap'>
                {text}
              </div>
              <Icon size={24} className={`${pathname===path?'text-blue-800':''} group-hover:text-blue-800 duration-300 `}
              />
            </Link >
          )
        })
      }
    </footer>

    <article className='sm:hidden py-8'>
      {children}
    </article>
  </React.Fragment>

  );
};

export default Layout;
