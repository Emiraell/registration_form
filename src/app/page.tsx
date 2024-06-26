import { Icon } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <div className="uppercase text-lg  font-bold absolute left-[50%] top-[37%] -translate-x-[50%] -translate-y-[50%]">
        2024 Diocesan youth <br />
        bible study conference <br />
        registarion portal
      </div>
      <div className=" bottom-20 absolute w-full italic tracking-wide">
        Are you an anglican youth in the <br /> diocese of lafia and you wish to
        be part <br />
        of the 2024 diocesan bible study conference,
        <br /> click the link to register
        <Link
          href="/form"
          className=" px-4 block bg-blue-600 py-2 mt-4 w-40 m-auto hover:opacity-80 rounded-full"
        >
          Register
          <Icon>
            <ArrowForwardIcon />
          </Icon>
        </Link>
      </div>
    </main>
  );
}
