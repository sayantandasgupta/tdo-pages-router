import { LockClosedIcon } from "@heroicons/react/24/solid";
import { lusitana } from "@/pages/ui/fonts";
import { Button } from "@/pages/ui/button";
import Link from "next/link";
import { useActionState } from "react";
// import { authenticate, State } from "@/app/lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// const initialState: State = {
//     message: '',
// }

export default function LoginForm() {

    // const [errorMessage, formAction, isPending] = useActionState(authenticate, initialState);

    return (
        <div className={`${lusitana.className} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
            <div className='max-w-xs w-full space-y-8'>
                <div>
                    <div className="mx-auto h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
                        <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login
                    </h2>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email Address*"
                                aria-required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password*"
                                aria-required
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            // aria-disabled={isPending}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </Button>
                        {/* <div
                            className="flex h-8 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {errorMessage && (
                                <>
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                    <p className="text-sm text-red-500">{errorMessage}</p>
                                </>
                            )}
                        </div> */}
                    </div>
                    <div className="flex justify-end">
                        <div className="text-sm">
                            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                                {"Don\'t have an account? Register Here"}
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}