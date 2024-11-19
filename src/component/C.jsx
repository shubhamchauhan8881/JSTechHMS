import React from 'react'

export default function C() {
  return (
    <div className='text-2xl max-w-sm'>
        <div className='flex items-stretch '>

            <div className='rounded-full m-2 bg-[#0064E6] text-white inline-flex flex-col items-center justify-center  h-20 w-20 circless relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                24/7
            </div>

            <div className='place-content-center bg-[#ddd] grow rounded-t-3xl p-4'>
                <h1>Always here for you!</h1>
            </div>

        </div>

        <div className='bg-[#ddd] p-4 rounded-b-3xl rounded-ss-3xl curve relative'>
            <h1 className='font-bold'>Address</h1>
            <p>Opp Meghraj Hotel, M G Road, Ghatkopar, Mumbai, Maharashtra - 400077</p>
        </div>
    </div>
  )
}
