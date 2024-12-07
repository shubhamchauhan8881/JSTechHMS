import React from "react";

const InputBox = () => {
  return (
    <div className="rounded-b-3xl px-6 py-4 bg-[#F1F4F7] flex items-center space-x-3">
      <button className="">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.625 9.625H12.375V1.375C12.375 0.614625 11.759 0 11 0C10.241 0 9.625 0.614625 9.625 1.375V9.625H1.375C0.616 9.625 0 10.2396 0 11C0 11.7604 0.616 12.375 1.375 12.375H9.625V20.625C9.625 21.3854 10.241 22 11 22C11.759 22 12.375 21.3854 12.375 20.625V12.375H20.625C21.384 12.375 22 11.7604 22 11C22 10.2396 21.384 9.625 20.625 9.625Z"
            fill="#222B45"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Write a message..."
        className="flex-1 px-4 py-2 border h-11 rounded-[10px] focus:outline-none placeholder-{#6B779A]-400"
      />
      <button className="">
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
            d="M8.8 17.512V19.8H11.1155C11.6578 19.8 12.1 20.2422 12.1 20.7845V21.0166C12.1 21.5578 11.6578 22 11.1155 22H4.2845C3.7422 22 3.3 21.5578 3.3 21.0166V20.7845C3.3 20.2422 3.7422 19.8 4.2845 19.8H6.6V17.512C2.8743 16.9752 0 13.772 0 9.9C0 9.2928 0.4917 8.8 1.1 8.8C1.7083 8.8 2.2 9.2928 2.2 9.9C2.2 12.9327 4.6673 15.4 7.7 15.4C10.7327 15.4 13.2 12.9327 13.2 9.9C13.2 9.2928 13.6917 8.8 14.3 8.8C14.9083 8.8 15.4 9.2928 15.4 9.9C15.4 13.772 12.5257 16.9752 8.8 17.512ZM5.5 4.4C5.5 3.1867 6.4867 2.2 7.7 2.2C8.9133 2.2 9.9 3.1867 9.9 4.4V9.9C9.9 11.1133 8.9133 12.1 7.7 12.1C6.4867 12.1 5.5 11.1133 5.5 9.9V4.4ZM7.7 14.3C10.1266 14.3 12.1 12.3266 12.1 9.9V4.4C12.1 1.9745 10.1266 0 7.7 0C5.2734 0 3.3 1.9745 3.3 4.4V9.9C3.3 12.3266 5.2734 14.3 7.7 14.3Z"
            fill="#222B45"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputBox;
