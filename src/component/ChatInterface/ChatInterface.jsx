import React from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import img from "../../assets/chatBG.png"
import ChatHeader from "./ChatHeader";
const ChatInterface = () => {
  const messages = [
    {
      id: 1,
      type: "sent",
      text: "hello, doctor; i believe i have the coronavirus as i am experiencing mild symptoms, what do i do?",
      time: "10:13",
    },
    {
      id: 2,
      type: "received",
      text: "I'm here for you, don't worry. What symptoms are you experiencing?",
      time: "10:14",
    },
    {
      id: 3,
      type: "sent",
      text: "fever\ndry cough\ntiredness\nsore throat",
      time: "10:14",
    },
    {
      id: 4,
      type: "received",
      text: "oh so sorry about that. do you have any underlying diseases?",
      time: "10:15",
    },
    { id: 6, type: "sent", text: "oh no", time: "10:16" },
    { id: 5, type: "audio", time: "10:18" },
  ];

  return (
  
      <div
        className="relative w-full lg:h-[1142px] h-224 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-30 backdrop-blur-lg"></div>

        {/* Main Content */}
        <div className="lg:relative lg:flex lg:justify-center lg:items-center h-full">
          <div className="relative h-[853px] lg:w-[942px] w-full mx-auto bg-white lg:border border-black rounded-3xl flex flex-col">
            <ChatHeader />
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((message) => (
                <Message
                  key={message.id}
                  type={message.type}
                  text={message.text}
                  time={message.time}
                />
              ))}
            </div>
            <div className="ml-[27px] mb-[6px]">
              <p className="text-sm text-[#6B779A] font-normal ">
                Dr Bellamy is typing...
              </p>
            </div>
            <InputBox />
          </div>
        </div>
      </div>
     
   
  );

};

export default ChatInterface;
