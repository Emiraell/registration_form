export default function Relationship() {
  const relationships = ["Single", "Engaged", "Married"];
  return (
    <div className="pt-8 md:w-[80%] relative">
      <label htmlFor="relationship">
        Relationship Status
        <span className="text-red-500 text-sm font-bold">&#42;</span>
      </label>
      <div className="flex justify-between items-center">
        {relationships.map((relationship) => (
          <div key={relationship} className=" gap-1 flex items-center">
            <div>
              <input
                value={relationship}
                name="relationship"
                type="radio"
                id="relationship"
              />
            </div>
            <div>{relationship}</div>
          </div>
        ))}
      </div>
      <p className="text-red-600 absolute top-9 right-9 text-xs ">error</p>
    </div>
  );
}
