import AgeGender from "../components/form_fields/AgeGender";
import Names from "../components/form_fields/Names";

export default function FormPage() {
  return (
    <div className=" m-auto md:w-[60%] w-[80%] pt-14 lg:w-[45%]">
      <Names />
      <AgeGender />
    </div>
  );
}
