export default function Issue() {
  return (
    <div>
      <div>
        <div className="text-2xl font-normal tracking-[0.3px] text-[#222B45]">
          Issue
        </div>

        <div className="text-[#6B779A] text-lg font-normal tracking-[0.234px] pt-4 pb-4 ">
          Write your problem
        </div>

        <textarea
          className=" h-[129px] w-[360px] pl-4 pt-4 rounded-lg border-solid border-[1px] bg-[#6B779A0D]"
          placeholder="write your problem"
        />
      </div>
    </div>
  );
}
