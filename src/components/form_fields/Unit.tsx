import { Iprops } from "./AgeGender";

export default function UnitChurch({ register, errors }: Iprops) {
  return (
    <div className="relative pt-8">
      <label htmlFor="unit">
        Name of Unit Church
        <span className="required"> &#42;</span>
      </label>
      <p className="text-blue-400 text-xs py-2 italic">
        Enter Nil, if not from Lafia Diocese or an Anglican
      </p>
      <input
        // useform register to register this input feild
        {...register("unit")}
        type="text"
        id="unit"
        className="nameInput"
        placeholder="St Peter's Angliacn, Keffi"
      />
      <p className="text-red-600 absolute top-9 -right-8 text-xs">
        {errors.unit?.message}
      </p>
    </div>
  );
}
