import React from "react";
import img from "../../public/DocImg.png";

const DoctorCard = () => {
  return (
    <div
      className="md:w-[414px] md:h-[470px]  shadow-lg rounded-xl p-6 flex flex-col items-center"
      style={{ background: "linear-gradient(#FFFFFF, #F7F9FF)" ,boxshadow:" 0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}}
    >
      <div className="flex flex-col justify-center items-center text-center bg-white pt-12">
        {/* Doctor's Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200 shadow-sm">
          <img
            className="w-full h-full object-cover	"
            src={img}
            alt="Doctor"
          />
        </div>

        {/* Doctor Name and Role */}
        <h1 className="text-2xl font-medium	  mt-8">Dr. Bellamy Nicholas</h1>
        <p className="text-lg font-normal mt-1">Virologist</p>
      </div>

      
      <div className="flex justify-between w-full mt-8">
        <div className="flex flex-col bg-white items-center w-[110px] h-[130px] rounded-3xl">
          <div className="bg-[rgb(122,206,250,0.15)]  w-12 h-16 rounded-b-2xl flex items-center justify-center">
            <span className=" text-lg">
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.2 19.5556C24.2 20.2302 23.6591 20.7778 22.99 20.7778C22.3209 20.7778 21.78 20.2302 21.78 19.5556C21.78 17.534 20.1513 15.8889 18.15 15.8889C17.3236 15.8889 16.5383 16.1749 15.9042 16.6821C16.5625 17.8994 16.94 19.2952 16.94 20.7778C16.94 21.4524 16.3991 22 15.73 22C15.0609 22 14.52 21.4524 14.52 20.7778C14.52 17.4081 11.806 14.6667 8.47 14.6667C5.13403 14.6667 2.42 17.4081 2.42 20.7778C2.42 21.4524 1.87913 22 1.21 22C0.54087 22 0 21.4524 0 20.7778C0 16.06 3.80061 12.2222 8.47 12.2222C10.8017 12.2222 12.9143 13.1792 14.4474 14.7229C15.4989 13.9016 16.7936 13.4444 18.15 13.4444C21.486 13.4444 24.2 16.1859 24.2 19.5556ZM18.15 7.33333C18.8179 7.33333 19.36 7.88211 19.36 8.55556C19.36 9.229 18.8179 9.77778 18.15 9.77778C17.4821 9.77778 16.94 9.229 16.94 8.55556C16.94 7.88211 17.4821 7.33333 18.15 7.33333ZM18.15 12.2222C20.1513 12.2222 21.78 10.5771 21.78 8.55556C21.78 6.534 20.1513 4.88889 18.15 4.88889C16.1487 4.88889 14.52 6.534 14.52 8.55556C14.52 10.5771 16.1487 12.2222 18.15 12.2222ZM8.47 2.44444C9.80463 2.44444 10.89 3.54078 10.89 4.88889C10.89 6.237 9.80463 7.33333 8.47 7.33333C7.13537 7.33333 6.05 6.237 6.05 4.88889C6.05 3.54078 7.13537 2.44444 8.47 2.44444ZM8.47 9.77778C11.1393 9.77778 13.31 7.58511 13.31 4.88889C13.31 2.19267 11.1393 0 8.47 0C5.80074 0 3.63 2.19267 3.63 4.88889C3.63 7.58511 5.80074 9.77778 8.47 9.77778Z"
                  fill="#7ACEFA"
                />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-lg leading-6 font-semibold text-gray-700">
            1000+
          </p>
          <p className="text-sm font-normal	 text-gray-500">Patients</p>
        </div>
        <div className="flex flex-col bg-white items-center w-[110px] h-[130px] rounded-3xl">
          <div className="bg-[#FDF1F3]  w-12 h-16 rounded-b-2xl flex items-center justify-center">
            <span className=" text-lg">
              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.03629 16.1777C7.69419 15.9896 7.28059 15.9929 6.94729 16.192L2.82449 18.612L4.43929 12.331C5.40179 12.881 6.51389 13.2 7.69969 13.2C8.88549 13.2 9.99759 12.881 10.9612 12.331L12.5991 18.7022L8.03629 16.1777ZM7.69969 2.2C10.1263 2.2 12.0997 4.1734 12.0997 6.6C12.0997 9.0266 10.1263 11 7.69969 11C5.27309 11 3.29969 9.0266 3.29969 6.6C3.29969 4.1734 5.27309 2.2 7.69969 2.2ZM15.3656 20.6261L12.8257 10.7492C13.7453 9.614 14.2997 8.1719 14.2997 6.6C14.2997 2.9601 11.3396 0 7.69969 0C4.06089 0 1.09969 2.9601 1.09969 6.6C1.09969 8.1719 1.65409 9.614 2.57369 10.7492L0.034887 20.6261C-0.076213 21.0573 0.083287 21.5116 0.438587 21.7789C0.792787 22.0462 1.27459 22.0704 1.65629 21.8482L7.51929 18.4063L13.7673 21.8625C13.9334 21.9549 14.1171 22 14.2997 22C14.5384 22 14.776 21.923 14.974 21.7701C15.3205 21.5017 15.4756 21.0518 15.3656 20.6261Z"
                  fill="#E8899E"
                />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-lg leading-6 font-semibold text-gray-700">
            10 Yrs
          </p>
          <p className="text-sm font-normal	 text-gray-500">Experience</p>
        </div>
        <div className="flex flex-col bg-white items-center w-[110px] h-[130px] rounded-3xl">
          <div className="bg-[#FEF6EC]  w-12 h-16 rounded-b-2xl flex items-center justify-center">
            <span className="text-blue-500 text-lg">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6057 16.3068C11.7902 16.3068 11.9748 16.3509 12.1431 16.4379L16.5175 18.7243L15.6853 13.8996C15.6191 13.5213 15.7457 13.1359 16.0219 12.8678L19.5455 9.46024L14.6674 8.74994C14.2902 8.69539 13.9641 8.45978 13.7946 8.11856L11.6057 3.71516L9.41677 8.11856C9.24732 8.45978 8.92119 8.69539 8.54398 8.74994L3.66588 9.46024L7.18954 12.8678C7.46576 13.1359 7.59227 13.5213 7.52612 13.8996L6.69395 18.7243L11.0683 16.4379C11.2366 16.3509 11.4212 16.3068 11.6057 16.3068ZM18.0611 21.9996C17.8766 21.9996 17.692 21.9567 17.5237 21.8685L11.6057 18.7766L5.68769 21.8685C5.2954 22.0727 4.82186 22.0368 4.46787 21.7768C4.1104 21.5168 3.93283 21.0769 4.00711 20.6417L5.13523 14.1097L0.353464 9.48461C0.0342927 9.17705 -0.0794483 8.71512 0.0563446 8.29381C0.190977 7.87251 0.555413 7.5661 0.992968 7.50227L7.60968 6.54127L10.5658 0.591918C10.9581 -0.197306 12.2533 -0.197306 12.6456 0.591918L15.6017 6.54127L22.2184 7.50227C22.656 7.5661 23.0204 7.87251 23.1551 8.29381C23.2909 8.71512 23.1771 9.17705 22.858 9.48461L18.0762 14.1097L19.2043 20.6417C19.2786 21.0769 19.101 21.5168 18.7435 21.7768C18.5428 21.9253 18.3025 21.9996 18.0611 21.9996Z"
                  fill="#F7C480"
                />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-lg leading-6 font-semibold text-gray-700">
            4.5
          </p>
          <p className="text-sm font-normal	 text-gray-500">Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
