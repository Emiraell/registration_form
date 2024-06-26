import { Iprops } from "./AgeGender";

export default function Archdeaconry({ register, errors }: any) {
  const archdeaconries: string[] = [
    "None",
    "Agyaragu",
    "Akwanga",
    "Anzuruku",
    "Aso Pada",
    "Cathedral",
    "Doma",
    "Duduguru",
    "Gudi",
    "Karmo",
    "Keffi",
    "Lafia-North",
    "Lafia-South",
    "Mada Station",
    "Madeki",
    "Majaga",
    "Mama",
    "Mararaba",
    "Mararaba Gurku",
    "Masaka",
    "Nasarawa",
    "New Karu",
    "Nyanya Gwandara",
    "Toto",
    "Yelwa",
  ];
  const positions: string[] = [
    "President / Vice",
    "Secretary / Ass",
    "Treasure",
    "Financial Secretary",
    "PRO",
    "Sisters Cord / Ass",
    "Youth Star Cord",
    "Prayer / Evangelism Sec",
    "Member",
    "Others",
  ];
  return (
    <div className="pt-8 flex justify-between  items-start gap-2">
      <div className="relative">
        <label htmlFor="archdeaconry" className="block">
          Archdeaconry
          <span className="text-red-500 text-sm font-bold"> &#42;</span>
        </label>
        <select
          {...register("archdeaconry")}
          id="archdeaconry"
          className="bg-gray-200 mt-2 rounded-sm py-1 px-2 w-32"
        >
          {archdeaconries.map((archdeaconry) => (
            <option key={archdeaconry} value={archdeaconry}>
              {archdeaconry}
            </option>
          ))}
        </select>
        <p className="text-red-600 absolute -bottom-5 right-0 text-xs">
          {errors.archdeaconry?.message}
        </p>
      </div>

      <div className="relative">
        <label htmlFor="position" className="block">
          Position <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        <select
          // useform register to register this input feild
          {...register("position")}
          id="position"
          className="bg-gray-200 mt-2 rounded-sm py-1 px-2 w-36"
        >
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
        <p className="text-red-600 absolute -bottom-5 right-0 text-xs">
          {errors.position?.message}
        </p>
      </div>
    </div>
  );
}
