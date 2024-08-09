import Image from "next/image";
import { lusitana } from "@/components/fonts";
import AppIcon from "@/components/app-logo";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AppIcon />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} antialiasing text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to TDO.</strong> This is the application you need
            to <strong>never forget</strong> your tasks
          </p>
          <div className="flex flex-row gap-7">
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Sign up</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src='/images/hero-desktop.jpg'
            width={1000}
            height={700}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
        </div>
      </div>
    </main>
  );
}