import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function Logo() {
  return (
    <Link href={"/"} prefetch={false}>
      <Image
        priority
        src="/images/vercel.svg"
        width={70}
        height={50}
        alt="logo"
        className=" dark:filter dark:invert"
      />
    </Link>
  );
}
