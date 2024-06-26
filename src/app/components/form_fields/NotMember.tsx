import { Iprops } from "./AgeGender";

export default function NotMember({ register, errors }: Iprops) {
  return (
    <div className="md:flex gap-6">
      <div className="relative pt-8">
        <label htmlFor="diocese">Enter Diocese</label>
        <p className="text-blue-400 text-xs py-2 italic">
          Enter diocese name, if not from lafia diocese
        </p>
        <input
          {...register("diocese")}
          type="text"
          id="diocese"
          className="bg-gray-200 outline-none rounded py-2 px-3 w-full"
          placeholder="Diocese of Kubwa"
        />
      </div>
      <div className="relative pt-8">
        <label htmlFor="church">Enter Church</label>
        <p className="text-blue-400 text-xs py-2 italic">
          Enter Church name, if not from an anglican
        </p>
        <input
          {...register("church")}
          type="text"
          id="church"
          className="bg-gray-200 outline-none rounded py-2 px-3 w-full"
          placeholder="Living Faith"
        />
      </div>
    </div>
  );
}
