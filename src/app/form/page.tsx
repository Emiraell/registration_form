import AgeGender from "../components/form_fields/AgeGender";
import Archdeaconry from "../components/form_fields/Archdeaconry";
import Competition from "../components/form_fields/Competition";
import Names from "../components/form_fields/Names";
import Relationship from "../components/form_fields/Relationship";

export default function FormPage() {
  return (
    <div className=" m-auto md:w-[60%] w-[80%] pt-14 lg:w-[45%]">
      <Names />
      <AgeGender />
      <Relationship />
      <Archdeaconry />
      <Competition />
    </div>
  );
}
