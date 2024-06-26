import Image from "next/image";
import youth from "../assests/ayf logo.jpg";
import diocese from "../assests/lafia.png";

export default function Header() {
  return (
    <div className="flex justify-around pt-6 pb-2 text-center px-2 fixed top-0 w-[100%] z-10 bg-blue-50">
      <div>
        <Image
          src={youth}
          alt="anglican youth logo"
          className="w-14 md:w-20 rounded-full"
        />
      </div>
      <div className="uppercase font-bold">
        <span>Church of Nigeria</span>
        <br />
        <span className="text-blue-500 text-xs md:text-sm">
          Diocesan youth council of the
        </span>
        <br />
        <span className="text-blue-900 text-xs md:text-sm">
          anglican youth fellowship
        </span>
        <br />
        <span className="text-emerald-500 md:text-sm">Lafia Diocese</span>
      </div>

      <div>
        <Image
          src={diocese}
          alt="anglican youth logo"
          className="md:w-20 rounded-full w-14 "
        />
      </div>
    </div>
  );
}
