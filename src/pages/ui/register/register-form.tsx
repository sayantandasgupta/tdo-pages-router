'use client'

import { LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { lusitana } from '@/pages/ui/fonts';
import { useActionState } from 'react';
// import { register, State } from '@/pages/lib/actions';
import { Button } from '@/pages/ui/button';

// const initialState: State = {
//     message: '',
// }

export default function RegisterForm() {

    // const [state, formAction] = useActionState(register, initialState);

    return (
        <div className={`${lusitana.className} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
            <div className='max-w-xs w-full space-y-8'>
                <div>
                    <div className="mx-auto h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
                        <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up
                    </h2>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className='sr-only'>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name*"
                                required
                            />
                        </div>
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
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Register
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <div className="text-sm">
                            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}