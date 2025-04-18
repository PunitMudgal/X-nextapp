import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-4 pt-4 flex justify-around text-textGray font-semibold border-b-[1px] border-borderGray">
        <Link
          className="pb-3 text-white flex items-center border-b-4 border-iconBlue  "
          href="/"
        >
          For you
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          Following
        </Link>
      </div>
      <Share />
      <Feed />
    </>
  );
}
