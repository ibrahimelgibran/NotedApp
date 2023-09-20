import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  const router = useRouter();
  const pathname = usePathname();

  const backPage = () => {
    const pagePath = pathname.split("/");
    return pagePath.length === 2 ? "/" : pagePath.slice(0, -1).join("/");
  };

  return (
    <button
      onClick={() => router.push(backPage())}
      className="w-8 aspect-square grid place-items-center text-title select-none">
      <IoIosArrowBack size={20} />
    </button>
  );
};

export default Back;
