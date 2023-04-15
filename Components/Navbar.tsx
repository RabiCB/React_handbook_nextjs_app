import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Links from "./Links";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ChecktheClick = (e: any) => {
      if (menu && ref.current && !ref.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", ChecktheClick);

    return () => {
      document.removeEventListener("mousedown", ChecktheClick);
    };
  }, [menu]);

  return (
    <>
      <Links ref={ref} menu={menu} setMenu={setMenu} />
      <div
        ref={ref}
        className={
          menu
            ? " h-screen flex transition-all ease-in-out duration-100 items-start z-20 pl-8 flex-col justify-start   w-56 bg-gray-100 border-x-[1px] border-slate-300/30  fixed pb-10    bottom-0 text-black left-0 top-0  space-y-4 pt-20"
            : " h-screen flex transition-all ease-in-out duration-100 items-start z-20 pl-8 flex-col justify-start  w-56 bg-gray-100 border-x-[1px] border-slate-300/30   fixed pb-10 left-0 top-0   bottom-0 text-black max-md:hidden  space-y-4 pt-20   "
        }
      >
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={()=>setMenu(false)}
            className="max-md:block w-10 h-10 hidden absolute top-20 hover:border-2 border-black right-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        

        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/"
        >
          React.js
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/useState"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold "
          }
          href="/useState"
        >
          useState Hook
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/useEffect"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/useEffect"
        >
          useEffect Hook
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/reactrouter"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/reactrouter"
        >
          React router
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/useContext"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/useContext"
        >
          useContext
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/useRef"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/useRef"
        >
          useRef
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className={
            router.pathname == "/useCallback"
              ? "text-[#0EA5E9] font-semibold"
              : "text-gray-600 font-semibold"
          }
          href="/useCallback"
        >
          useCallback
        </Link>
      </div>
      
    </>
  );
};

export default Navbar;
