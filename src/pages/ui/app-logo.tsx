import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/pages/ui/fonts";

export default function AppIcon() {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <CheckCircleIcon className="h-12 w-12" />
            <p className="text-[50px]">TDO</p>
        </div>
    )
}