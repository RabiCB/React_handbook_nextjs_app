import React from 'react'



const Links = ({menu,setMenu}:any) => {
  
  return (
    <div className="h-16 w-screen fixed top-0 right-0 left-0 border-b-[1px] border-slate-300/30  bg-gray-200 flex justify-between items-center px-8  shadow-sm z-40 ">
        <div className="flex flex-row gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#0EA5E9]"
          >
            <path
              fillRule="evenodd"
              d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="font-semibold text-xl">F-DOCS</h2>
        </div>

        <ul className="flex space-x-6 items-center max-md:hidden">
          <h1 className="text-slate-400">Powered By </h1>
          <a href="https://react.dev.com" className="cursor-pointer">
            <li>
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                className="w-12 h-10 object-contain rounded-lg hover:animate-spin"
                alt="react logo"
              />
            </li>
          </a>
          <a href="https://www.sanity.io/" className="cursor-pointer">
            <li>
              <img
                src="https://www.sanity.io/static/images/logo_rounded_square.png"
                className="w-12 h-10 object-contain rounded-lg hover:animate-spin"
                alt="react logo"
              />
            </li>
          </a>
          <a href="https://nextjs.org/">
            <li>
              <img
                src="https://teacode.io/wp-content/uploads/2022/06/Copy-of-AWS-Amplify-blog-compress.png"
                className="w-12 h-10 object-cover rounded-lg hover:animate-spin"
                alt="react logo"
              />
            </li>
          </a>
        </ul>
        <div onClick={() => setMenu(!menu)} className="hidden max-md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
  )
}

export default Links