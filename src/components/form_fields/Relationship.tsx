import { Iprops } from "./AgeGender";

export default function Relationship({ register, errors }: Iprops) {
  const relationships = ["Single", "Engaged", "Married"];
  return (
    <div className="pt-8 md:w-[80%] relative">
      <label htmlFor="relationship">
        Relationship Status
        <span className="required"> &#42;</span>
      </label>
      <div className="flex justify-between items-center">
        {relationships.map((relationship) => (
          <div key={relationship} className=" gap-1 flex items-center">
            <div>
              <input
                // useform register to register this input feild
                {...register("relationship")}
                value={relationship}
                type="radio"
                id="relationship"
              />
            </div>
            <div>{relationship}</div>
          </div>
        ))}
      </div>
      <p className="text-red-600 absolute top-9 right-9 text-xs ">
        {errors.relationship?.message}
      </p>
    </div>
  );
}
