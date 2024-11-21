import Image from "next/image"
import facebook from "../../../image/facebook.svg"
export default function Login(){
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            {/* left side */}
            <div className="text-3xl w-1/2 px-8" >
          <Image src={facebook} alt="facebook login" height={210} width={200}/>
          <p className="ml-8 -mt-3">
            Facebook helps you connect and share with the people in your life.   
             </p>
            </div>
           {/* Right side */}
            <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">

                <input className="my-2 border border-1 border-gray-100 p-3 rounded-md" 
                type="text" 
                placeholder="Email Address or Phone number " />

                <input className="my-2 border border-1 border-gray-100 p-3 rounded-md" 
                 type="password"
                 placeholder="Password" />


                <button className="bg-[#1877F2] my-2 py-2 text-lg font-bold text-white hover:bg-blue-700 ">
                    Log in </button>
                <button className="text-[#1877F2] text-sm cursor-pointer text-center hover:underline  ">
                   <b>forgetten password?</b> </button>
                <span>
                    <hr />
                    </span>
                    <button className="bg-[#42B72A] text-white my-2 py-2 text-lg font-bold hover:bg-green-700">
                        create new account</button>
            </div>
       </div>
          
    )
}