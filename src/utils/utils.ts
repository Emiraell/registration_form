import * as yup from "yup";
export const schema = yup.object().shape({
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

export const serviceID = "service_s6ehvor";
export const publicKey = "YWPceGpY8Qy9IS3lK";
export const templateID = "template_y8pnh98";

// user data interface
export interface UserDetails {
  surname: string;
  firstname: string;
  middle: string;
  email: string;
  age: string;
  gender: string;
  relationship: string;
  archdeaconry: string;
  position: string;
  competition: string;
  unit: string;
  diocese: string;
  church: string;
}
