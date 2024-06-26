"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisteredPage() {
  const router = useRouter();
  return (
    <div className="text-center pt-40">
      <p className="py-2">
        <span className="text-blue-600 italic">Congratulations!!!!</span>, you
        have suceesfully registered for the 2024 diocesan youth bible study
        conference
      </p>
      <p className="py-2">
        Kindly visit your fellowship executives and make a payment of
        <span className="text-blue-700 font-bold italic">1000 naira </span> to
        validate your registration
      </p>
      <p className="py-2">See you at Lafia</p>
      <Button variant="outlined" onClick={() => router.replace("/")}>
        Go back to home
      </Button>
    </div>
  );
}
