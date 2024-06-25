"use client";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import AgeGender from "../components/form_fields/AgeGender";
import Archdeaconry from "../components/form_fields/Archdeaconry";
import Competition from "../components/form_fields/Competition";
import Names from "../components/form_fields/Names";
import NotMember from "../components/form_fields/NotMember";
import Relationship from "../components/form_fields/Relationship";
import UnitChurch from "../components/form_fields/Unit";

export default function FormPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <>
      <form className=" m-auto md:w-[60%] w-[80%] pt-14 lg:w-[45%]">
        <Names register={register} errors={errors} />
        <AgeGender register={register} errors={errors} />
        <Relationship register={register} errors={errors} />
        <Archdeaconry register={register} errors={errors} />
        <Competition register={register} errors={errors} />
        <UnitChurch register={register} errors={errors} />
        <NotMember register={register} errors={errors} />
      </form>
      <Footer />
    </>
  );
}
