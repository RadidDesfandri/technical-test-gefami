import Link from "next/link";
import IndexChangeValue from "./indexChangeValue";

const ChangeValue = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/10">
      <div className="w-full max-w-xl">
        <Link href={"/"} className="mb-6 block rounded-lg">
          Back
        </Link>
      </div>
      <IndexChangeValue />
    </div>
  );
};

export default ChangeValue;
