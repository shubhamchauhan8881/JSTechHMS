import React from "react";

const CommunicationOptions = () => {
  const options = [
    {
      id: 1,
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="50"
            height="50"
            rx="15"
            fill="#EDA1AB"
            fill-opacity="0.15"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.9996 25.9992C28.4476 25.9992 27.9996 25.5512 27.9996 24.9992C27.9996 24.4472 28.4476 23.9992 28.9996 23.9992C29.5516 23.9992 29.9996 24.4472 29.9996 24.9992C29.9996 25.5512 29.5516 25.9992 28.9996 25.9992ZM24.9996 25.9992C24.4476 25.9992 23.9996 25.5512 23.9996 24.9992C23.9996 24.4472 24.4476 23.9992 24.9996 23.9992C25.5516 23.9992 25.9996 24.4472 25.9996 24.9992C25.9996 25.5512 25.5516 25.9992 24.9996 25.9992ZM20.9996 25.9992C20.4476 25.9992 19.9996 25.5512 19.9996 24.9992C19.9996 24.4472 20.4476 23.9992 20.9996 23.9992C21.5516 23.9992 21.9996 24.4472 21.9996 24.9992C21.9996 25.5512 21.5516 25.9992 20.9996 25.9992ZM32.0706 17.9282C29.7866 15.6442 26.6256 14.6252 23.3966 15.1242C19.3196 15.7602 15.9396 19.0442 15.1766 23.1112C14.8096 25.0692 15.0206 27.0632 15.7876 28.8762C15.8856 29.1062 15.9156 29.3222 15.8766 29.5152L15.0196 33.8032C14.9536 34.1312 15.0566 34.4702 15.2926 34.7062C15.4816 34.8952 15.7366 34.9992 15.9996 34.9992C16.0646 34.9992 16.1306 34.9932 16.1956 34.9792L20.4786 34.1232C20.7246 34.0762 20.9636 34.1452 21.1226 34.2112C22.9366 34.9782 24.9306 35.1882 26.8876 34.8222C30.9546 34.0592 34.2386 30.6792 34.8746 26.6022C35.3776 23.3742 34.3556 20.2132 32.0706 17.9282Z"
            fill="#E8899E"
          />
        </svg>
      ),
      title: "Messaging",
      description: "Chat me up, share photos.",
      
    },
    {
      id: 2,
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="50"
            height="50"
            rx="15"
            fill="#7ACEFA"
            fill-opacity="0.15"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.4 35C21.908 35 15 28.092 15 19.6C15 17.063 17.064 15 19.6 15C19.86 15 20.117 15.022 20.366 15.065C20.609 15.104 20.854 15.166 21.091 15.248C21.417 15.361 21.661 15.634 21.738 15.97L23.108 21.934C23.183 22.262 23.088 22.606 22.855 22.85C22.718 22.992 22.715 22.995 21.475 23.644C22.479 25.818 24.224 27.557 26.355 28.527C27.004 27.286 27.008 27.282 27.15 27.146C27.395 26.912 27.74 26.821 28.067 26.893L34.031 28.262C34.366 28.339 34.639 28.583 34.752 28.908C34.834 29.144 34.895 29.388 34.936 29.639C34.978 29.886 35 30.142 35 30.4C35 32.937 32.937 35 30.4 35Z"
            fill="#7ACEFA"
          />
        </svg>
      ),
      title: "Audio Call",
      description: "Call your doctor directly.",
      
    },
    {
      id: 3,
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="50"
            height="50"
            rx="15"
            fill="#F7C480"
            fill-opacity="0.15"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.012 20.146C33.386 19.874 32.66 19.992 32.161 20.452L30 22.452V21C30 19.346 28.655 18 27 18H18C16.346 18 15 19.346 15 21V29C15 30.655 16.346 32 18 32H27C28.655 32 30 30.655 30 29V27.549L32.161 29.548C32.482 29.845 32.897 30 33.32 30C33.553 30 33.788 29.953 34.012 29.855C34.621 29.589 35 29.02 35 28.371V21.63C35 20.981 34.621 20.412 34.012 20.146Z"
            fill="#F7C480"
          />
        </svg>
      ),
      title: "Video Call",
      description: "See your doctor live.",
      
    },
  ];

  return (
    <div className="text-left max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Communication</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div key={option.id} className="flex items-center ">
            <div className={`rounded-full flex items-center justify-center `}>
              {option.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold ml-2">{option.title}</h3>
              <p className="font-normal	text-sm leading-5 text-[#6B779A] ml-2">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationOptions;
