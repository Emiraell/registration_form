"use client";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import AgeGender from "../../components/form_fields/AgeGender";
import Archdeaconry from "../../components/form_fields/Archdeaconry";
import Competition from "../../components/form_fields/Competition";
import Names from "../../components/form_fields/Names";
import NotMember from "../../components/form_fields/NotMember";
import Relationship from "../../components/form_fields/Relationship";
import UnitChurch from "../../components/form_fields/Unit";
import { Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function FormPage() {
  const schema = yup.object().shape({
    surname: yup.string().required("Name is required"),
    firstname: yup.string().required("First name is required"),
    middle: yup.string(),
    email: yup.string().min(11).required("Enter a valid email or number"),
    age: yup.string().required("Select age group"),
    gender: yup.string().required("Select a gender"),
    relationship: yup.string().required(),
    archdeaconry: yup.string().required("Select an archdeaconry"),
    position: yup.string().required(),
    competition: yup.array().required("pick a competition or none"),
    unit: yup.string().required("Enter church name or nil if not an anglican"),
    diocese: yup.string(),
    church: yup.string(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const postRef = collection(db, "candidates");

  const serviceID = "service_s6ehvor";
  const publicKey = "YWPceGpY8Qy9IS3lK";
  const templateID = "template_y8pnh98";
  const submitData = async (data: any, e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api", data);
      await addDoc(postRef, { ...data });
      toast.success(res.data.msg);

      const message = `Names: ${data.surname} ${data.firstname} ${
        data.middle !== "" && data.middle
      }, Email/Phone number: ${data.email}, Gender: ${data.gender}, age: ${
        data.age
      }, Relationship status: ${data.relationship}, Archdeaconry: ${
        data.archdeaconry
      }, Position: ${
        data.position
      }, Competitions to participate in: ${data.competition.join()}, Unit Church: ${
        data.unit
      }, ${data.diocese !== "" && `Diocese: ${data.diocese}`}, ${
        data.church !== "" && `Church: ${data.church}`
      }`;
      const templateParams = {
        from_name: data.firstname,
        from_email: "emmzex19@gmail.com",
        to_name: "DYC planning comitter",
        message,
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey);
    } catch (err: any) {
      toast.error(err);
    }
    reset();
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className=" m-auto md:w-[60%] w-[80%] pt-14 lg:w-[45%] shadow-md"
        onSubmit={handleSubmit(submitData)}
      >
        <Names register={register} errors={errors} />
        <AgeGender register={register} errors={errors} />
        <Relationship register={register} errors={errors} />
        <Archdeaconry register={register} errors={errors} />
        <Competition register={register} errors={errors} />
        <UnitChurch register={register} errors={errors} />
        <NotMember register={register} errors={errors} />
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
      <Footer />
    </>
  );
}
