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
          // useform register to register this input feild
          {...register("diocese")}
          type="text"
          id="diocese"
          className="nameInput"
          placeholder="Diocese of Kubwa"
        />
      </div>
      <div className="relative pt-8">
        <label htmlFor="church">Enter Church</label>
        <p className="text-blue-400 text-xs py-2 italic">
          Enter Church name, if not an anglican
        </p>
        <input
          // useform register to register this input feild
          {...register("church")}
          type="text"
          id="church"
          className="nameInput "
          placeholder="Living Faith"
        />
      </div>
    </div>
  );
}
