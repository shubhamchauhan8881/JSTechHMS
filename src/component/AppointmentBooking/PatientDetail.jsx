export default function PatientDetail() {
  return (
    <div>
      <div className=" h-[299px] flex flex-col justify-center items-start gap-2.5">
        <div className=" text-2xl font-normal tracking-[0.3px] text-[#222B45]">
          Patient Detail
        </div>
        <div className="text-[#6B779A] text-lg font-normal tracking-[0.234px] ">
          Full Name
        </div>
        <input
          className="h-12 w-80 pl-5 rounded-lg border-solid border-[1px] bg-[#6B779A0D]"
          placeholder="Full name"
        />

        <div className="text-[#6B779A]  text-lg font-normal tracking-[0.234px] ">
          Age
        </div>
        <input
          className="h-12 w-80 pl-5 rounded-lg border-solid border-[1px] bg-[#6B779A0D]"
          placeholder="26-29"
        />

        <div className="text-[#6B779A] text-lg font-normal tracking-[0.234px] ">
          Gender
        </div>

        <div className="flex gap-2.5">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              value="male"
              className="peer"
              hidden
              id="male"
            />
            <span className="w-24 h-10 px-5 py-2 rounded-lg  border-[#6B779A]  peer-checked:bg-[#3E64FF] peer-checked:text-white border-solid border-[1px] text-base ">
              Male
            </span>
          </label>

          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              value="female"
              className="peer"
              hidden
              id="female"
            />
            <span className="w-24 h-10 px-5 py-2 rounded-lg border-[#6B779A] peer-checked:bg-[#3E64FF] peer-checked:text-white border-solid border-[1px] text-base ">
              Female
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
