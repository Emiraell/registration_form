import { Iprops } from "./AgeGender";

export default function Competition({ register, errors }: Iprops) {
  const competitions: string[] = [
    "Bible quiz",
    "Music",
    "Volleyball",
    "Football",
    "Race",
    "Indoor games(whot,Ludo etc)",
    "None",
  ];
  return (
    <div className="relative pt-8">
      <label htmlFor="competition">
        Competitons
        <span className="text-red-500 text-sm font-bold"> &#42;</span>
      </label>
      <p className="text-blue-400 text-xs py-2 italic">
        Please select competitions you will be partaking in
      </p>
      <div className="md:flex gap-x-5 overflow-x-auto">
        {competitions.map((competition) => (
          <div
            key={competition}
            className=" align-text-bottom gap-1 flex gap-x-2 py-2 "
          >
            <div>
              <input
                value={competition}
                // useform register to register this input feild
                {...register("competition")}
                type="checkbox"
                id="competition"
              />
            </div>
            <div>{competition}</div>
          </div>
        ))}
      </div>
      <p className="text-red-600 absolute top-12 -right-8 text-xs">
        {errors.competition?.message}
      </p>
    </div>
  );
}
