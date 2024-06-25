export default function AgeGender() {
  const ages: string[] = [
    "12-17 years",
    "13-24 years",
    "25-34 years",
    "35 years - above",
  ];
  const genders: string[] = ["Male", "Female"];
  return (
    <div className="pt-6 flex justify-around items-start">
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
              <input value={age} name="age" type="radio" id="age" />
            </div>
            <div>{age}</div>
          </div>
        ))}
        <p className="text-red-600 absolute top-0 right-9 text-xs">error</p>
      </div>

      <div className="relative">
        <label htmlFor="gender">
          Gender <span className="text-red-500 text-sm font-bold">&#42;</span>
        </label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center py-2 gap-x-2">
            <div>
              <input name="gender" value={gender} type="radio" id="age" />
            </div>
            <div>{gender}</div>
          </div>
        ))}

        <p className="text-red-600 absolute top-0 -right-7 text-xs">error</p>
      </div>
    </div>
  );
}
