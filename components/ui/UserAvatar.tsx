import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  name: string;
  image: string;
  className?: string;
}
const UserAvatar = ({ name, image, className }: AvatarProps) => {
  return (
    <Avatar className={cn("bg-white text-zinc-900", className)}>
      {image && 
        <Image src={image} 
               alt={name} 
               width={50} 
               height={50}
               className="rounded-full"
            />
        }
      <AvatarFallback delayMs={1000} className="dark:bg-white dark:text-zinc-900 text-lg">
        {name.split(" ")
        .map(n => n[0])
        .join("")}
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
