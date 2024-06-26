"use client";
// import page component, hooks and apis
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
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { schema, UserDetails } from "@/utils/utils";
import { useRouter } from "next/navigation";

export default function FormPage() {
  // useform
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // router
  const router = useRouter();
  // firebase database collection to send user details to
  const postRef = collection(db, "candidates");

  // all users registered in both the mongose and firestore db
  const [users, setUsers] = useState<UserDetails[]>([]);

  const fetchUsers = async () => {
    // fetch users from the database and assign them to the users state
    const res = await axios("/api");
    setUsers(res.data.results);
  };
  // fetch users on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  // submit user funtion
  const submitData = async (data: any, e: any) => {
    e.preventDefault();

    // check if user is already registered
    const alreadyRegister = users.find((user) => user.email === data.email);

    if (alreadyRegister) {
      // alert user if already registered
      alert(
        "email or phone already registered, please use another email or phone number"
      );
    } else {
      // send user details to the database if user email/phone number isn't registered yet
      try {
        // send user data to the mongose database
        const res = await axios.post("/api", data);

        // send user data to the firestore database
        await addDoc(postRef, { ...data });
        // toast on success
        toast.success(res.data.msg);

        // message to send to the registration team email address
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

        // message template
        const templateParams = {
          from_name: data.firstname,
          from_email: data.email,
          to_name: "DYC planning comitter",
          message,
        };

        // send to registration team email address
        emailjs.send(
          `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_KEY}`,
          templateParams,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        );
      } catch (err: any) {
        // toast on error
        toast.error(err);
      }
      reset();
      // move to registered page after 2 seconds
      setTimeout(() => {
        router.push("/registered");
      }, 1500);
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className=" m-auto md:w-[60%] w-[80%] pt-40 lg:w-[45%]"
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
