import React from 'react'
import DoctorCard from './DoctorCard'
import CommunicationOptions from './CommunicationOptions ';

const DoctorDetails = () => {
  return (
    <div className="flex  md:justify-between md:flex-row flex-col md:w11/12  justify-between  md:h-[483px] h-[1155px] " style={{}}>
      <DoctorCard></DoctorCard>
      <div className="w-[22rem] h-32">
        <h1 className="text-xl font-semibold">About Doctor</h1>
        <p className="font-normal	text-lg leading-5	text-[#6B779A]">
          Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital at
          London. He has achieved several awards and recognition for is
          contribution and service in his own field. He is available for private
          consultation.
        </p>
      </div>
      <div className="w-[15rem] h-14">
        <h1 className="text-xl font-semibold">Working time a </h1>
        <p className="font-normal	text-lg leading-5	text-[#6B779A]">
          Mon - Sat (08:30 AM - 09:00 PM)
        </p>
      </div>
      <div className="  w-52 ">
        <CommunicationOptions />
      </div>
      <div>
        <button className="bg-[#3E64FF] rounded-full w-60 h-16 text-xl font-medium text-center">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorDetails
