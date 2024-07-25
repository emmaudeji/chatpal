import { ArrowLeftIcon } from '@/assets';
import { ChevronLast, ChevronFirst } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, createContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen sticky top-0">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        
        <div className="group relative px-4 py-8 pb-4 flex justify-between items-center">
          <div 
           onClick={() => setExpanded(true)}
           className="w-10 h-10 overflow-hidden">
            <Image src={'/chatpal.png'} alt='logo' width={150} height={150} className='object-contain w-full h-full shrink-0'/>
          </div>
          <h2
            className={`font-bold text-2xl text-blue-800 overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          >
            chatpal
          </h2>
          {expanded ? <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <ChevronFirst />
          </button>
          : 
            (
            <div
              onClick={() => setExpanded(true)}
              className={`
              absolute left-full rounded-md px-2 py-1 ml-1
              bg-blue-100 text-blue-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
              text-nowrap
          `}
            >
               <ChevronLast /> 
            </div>
          )}


        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t relative flex p-3">
          <SidebarContext.Provider value={{ expanded }}>
              <button
                className={`
                  transition-colors group
                  bg-[#FA6C6C] text-white rounded-md
                   flex items-center py-2 px-3 
                  font-medium cursor-pointer
                `}
              >
                <div className="flex-shrink-0"><ArrowLeftIcon/></div>
                <span
                  className={`overflow-hidden transition-all ${
                    expanded ? 'max-w-40 ml-3' : 'max-w-0'
                  }`}
                >
                  <p>Log Out</p>
                </span>

                {!expanded && (
                  <div
                    className={`
                    absolute left-full rounded-md px-2 py-1 ml-1
                    bg-red-100 text-red-800 text-sm
                    invisible opacity-20 -translate-x-3 transition-all
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    text-nowrap
                `}
                  >
                    <p>Log Out</p>
                  </div>
                )}

              </button>
          </SidebarContext.Provider>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({ icon, text, path, active = false, alert = false }: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('SidebarItem must be used within a Sidebar');
  }

  const { expanded } = context;

  return (
    <Link href={path}
      className={`
        relative flex items-center py-2 px-3 
        font-medium cursor-pointer
        transition-colors group
        ${active ? 'bg-[#E3E2E2] font-bold' : 'hover:bg-[#E3E2E2]'}
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-40 ml-3' : 'w-0'
        }`}
      >
        <p className={active ? 'font-bold' : ''}></p>{text}
      </span>

      {alert && (
        <div
          className={`absolute right-4 w-4 h-4 rounded-full bg-red-500 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-1
          bg-blue-100 text-blue-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          text-nowrap
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}
