import Link from "next/link";
import Image from "next/image";

export default function register() {
    return (
       //bg-gradient-to-b from-cyan-500 to-cyan-900 
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-orange-300">
            <Image
            className="ml-14 -mr-14 h-screenflex items-center justify-center rounded-l-lg shadow-lg"
            src="/bg-left.jpg"
            width={394}
            height={394}
            alt="background-left"
            />
            <div className="rounded-r-lg p-4 bg-white m-14 shadow-lg">
                <h1 className="flex justify-end ml-64 w-10 font-serif text-3xl font-bold my-6 mb- border-b-4 border-amber-500 object-none">SIGNUP</h1>
                <form action="" className="p-4">
                    <label className="block pb-4">
                        <div className="relative">
                            <input                             
                                type="text" 
                                placeholder="Full Name" 
                                className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md  shadow-sm  outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>    
                    </label>
                    <label className="block pb-4">
                        <div className="relative">
                            <input                             
                                type="text" 
                                placeholder="Username" 
                                className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md  shadow-sm  outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                </svg>
                            </div>
                        </div>    
                    </label>
                    <label className="block pb-4">
                        <div className="relative">
                            <input                             
                                type="text" 
                                placeholder="Email" 
                                className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md  shadow-sm  outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </div>
                        </div>    
                    </label>
                    <label>
                        <div className="relative ">
                            <input 
                                type="password" 
                                placeholder="Password"
                                className="mt-1 w-full px-12 py-2 pl-10 bg-white border-b-4 border-slate-300 rounded-md text-sm shadow-sm outline-none" 
                            />
                            <div className="absolute inset-y-0 pl-3 left-0 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="absolute inset-y-0 pl-2 left-60 flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        </div>
                    </label>
                </form>
                <div className="w text-center my-6">
                    <button className="w-full text-xl font-black text-white bg-amber-500 rounded-lg p-3 h-27">
                        Register
                    </button>
                    <p className="font-sans text-sm mt-3 pt-1 "> Already have an account?
                        <span className="text-red-600 pl-2 font-bold">
                            <Link href="/">Login now</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}