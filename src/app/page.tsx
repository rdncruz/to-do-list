import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    //bg-gradient-to-b from-cyan-500 to-cyan-900 
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-orange-300">
        <div className="rounded-l-lg p-4 bg-white m-14 shadow-lg">
            <h1 className="w-10 font-serif text-3xl font-bold my-6 ml-3 mb- border-b-4 border-amber-500 ">LOGIN</h1>
            <form action="" className="p-4">
                <label className="block pb-4">
                    <div className="relative">
                        <input                             
                            type="text" 
                            placeholder="Enter your email" 
                            className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md  shadow-sm  outline-none"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>    
                </label>
                <label>
                    <div className="relative ">
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md text-sm shadow-sm outline-none" 
                        />
                        <div className="absolute inset-y-0 pl-3 left-0 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </label>
            </form>
            <p className="ml-3 my-4 text-slate-950 text-sm">Forget password?</p>
            <div className="w text-center my-6">
                <button className="w-full text-xl font-black text-white bg-amber-500 rounded-lg p-3 h-27">
                    Login
                </button>
                <h1 className="text-slate-950 p-1 font-bold">or</h1>
                <button className="w-full text-xl font-black text-white bg-amber-900 rounded-lg p-3 h-27">
                    Continue As Guest
                </button>
                <p className="font-sans text-sm mt-2 py-2 "> Don't have an account?
                    <span className="text-red-600 pl-2 font-bold"><Link href="/register">Signup now</Link></span>
                </p>
            </div>
        </div>
        <Image
          className="-ml-14 mr-14 h-screenflex items-center justify-center rounded-r-lg shadow-lg"
          src="/bg-right.jpg"
          width={390}
          height={390}
          alt="background-left"
        />
    </div>
  );
}
