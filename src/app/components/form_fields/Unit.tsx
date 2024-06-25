import { Iprops } from "./AgeGender";

export default function UnitChurch({ register, errors }: Iprops) {
  return (
    <div className="relative pt-8">
      <label htmlFor="unit">
        Name of Unit Church
        <span className="text-red-500 text-sm font-bold"> &#42;</span>
      </label>
      <p className="text-blue-400 text-xs py-2 italic">
        Enter Nil, if not from Lafia Diocese or an Anglican
      </p>
      <input
        type="text"
        id="unit"
        className="bg-gray-200 outline-none rounded py-2 px-3 w-full"
        placeholder="St Peter's Angliacn, Keffi"
      />
      <p className="text-red-600 absolute top-9 right-4 text-xs">error</p>
    </div>
  );
}
