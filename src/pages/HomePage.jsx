import C from "../component/C";
import Header from "../component/Header";

export default function HomePage() {
  return (
    <section>
        <div className="hero min-h-screen rounded-3xl">
            <Header />
            
            <div className="flex items-stretch px-10">
                <div className="w-2/3">
                    <h1 className="font-bold text-7xl leading-tight">Get the Best <span className="text-[#0064E6]">Medical</span> <br/> <span className="text-[#0064E6]">Expertise</span> for Every Life<br/> Moment.</h1>
                    
                    <div className='max-w-[18.2rem] mt-2 '>
                        <C />
                    </div>
                </div>

                <div className="w-1/3">
                    <div className="h-[30rem] w-full relative">
                        <div className="absolute max-w-36 top-5 -left-20 bg-white rounded-xl p-2">
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <div className="h-8 border border-white w-8 bg-blue-500 rounded-full" ></div>
                                    <div className="h-8 border border-white relative -left-3 w-8 bg-red-500 rounded-full" ></div>
                                    <div className="h-8 border border-white relative -left-6 w-8 bg-pink-500 rounded-full" ></div>
                                </div>
                                <button className="bg-[#0064E6] text-white rounded-full h-8 w-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-0.5">
                                <h1 className="font-bold text-lg">Our Patients</h1>
                                <p className="text-xs">About 20K+ patients have trusted us and shared what they felt during their consultation with us.</p>
                            </div>
                        </div>

                        <div className="absolute max-w-60 -bottom-16 right-8 bg-white rounded-xl p-4">
                            <h1 className="text-5xl font-bold">10<span className="text-[#0064E6]">+</span></h1>
                            <p className="mt-2 text-xs">We have experience with our doctors in providing health services for our patients.</p>
                        </div>
                        <img src="Image Holder.png" alt=""  className="h-full w-full object-strech object-center"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-10 mt-40">
            <h2 className="text-[55px] font-semibold leading-tight">Your Health, <span className="text-myblue">Our Priority</span></h2>
            <p className="text-2xl">Exceptional Medical Services Tailored for You</p>
            <div className="flex  justify-evenly mt-12">
                
                <div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-10  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
                    <div>
                        <h4 className="text-3xl font-bold text-left">Instant Video Consultation</h4>
                        <p className="text-sm mt-1 font-medium">Connect within 60 seconds.</p>
                    </div>

                    <div className="ms-auto grow overflow-hidden">
                        <img src="/i9KYIumN 1.png" alt="Small Icon"
                            className="h-full w-full object-contain"
                            />
                    </div>

                    <button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-2  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
                    <div>
                        <h4 className="text-3xl font-bold text-left">Find The Doctors Near You.</h4>
                        <p className="text-sm mt-1 font-medium">Confirmed Appointments.</p>
                    </div>

                    <div className="grow overflow-hidden ms-auto pt-8 p-4">
                        <img src="/nurse.png" alt="Small Icon"
                            className="h-full w-full object-contain"
                            />
                    </div>

                    <button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
                
                <div className="pt-8 ps-8 pe-4 pb-4 flex flex-col gap-10  w-[22rem] h-[26rem] bg-[#BDD9FF] rounded-3xl relative">
                    <div>
                        <h4 className="text-3xl font-bold text-left">24/7 <br />Medicine</h4>
                        <p className="text-sm mt-1 font-medium">Essentials At Your Door Step.</p>
                    </div>

                    <div className="ms-auto grow overflow-hidden">
                        <img src="/medicine-297778_1280 1.png" alt="Small Icon"
                            className="h-full w-full object-contain"
                            />
                    </div>

                    <button className="absolute left-8 bottom-8 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
             
            </div>
        </div>
    </section>
  )
}
