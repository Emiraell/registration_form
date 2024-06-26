import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

// interface for all form feild component received props
export interface Iprops {
  register: UseFormRegister<any>;
  errors: any;
}
export default function AgeGender({ register, errors }: Iprops) {
  const ages: string[] = [
    "12-17 years",
    "13-24 years",
    "25-34 years",
    "35 years - above",
  ];
  const genders: string[] = ["Male", "Female"];
  return (
    <div className="pt-6 flex justify-between items-start w-[80%]">
      <div className="relative">
        <label htmlFor="age">
          Age <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        {ages.map((age) => (
          <div
            key={age}
            className=" text-start gap-1 flex items-center gap-x- py-2"
          >
            <div>
              <input
                value={age}
                type="radio"
                id="age"
                // useform register to register this input feild
                {...register("age")}
              />
            </div>
            <div>{age}</div>
          </div>
        ))}
        <p className="text-red-600 absolute top-1 right-0 text-xs">
          {/* error message */}
          {errors.age?.message}
        </p>
      </div>

      <div className="relative">
        <label htmlFor="gender">
          Gender <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center py-2 gap-x-2">
            <div>
              <input
                // useform register to register this input feild
                {...register("gender")}
                value={gender}
                type="radio"
                id="gender"
              />
            </div>
            <div>{gender}</div>
          </div>
        ))}

        <p className="text-red-600 absolute top-1 -right-24 text-xs">
          {errors.gender?.message}
        </p>
      </div>
    </div>
  );
}
