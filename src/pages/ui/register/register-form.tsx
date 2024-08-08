'use client'

import { LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { lusitana } from '@/pages/ui/fonts';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/pages/ui/button';
import { revalidatePath } from 'next/cache';

// const initialState: State = {
//     message: '',
// }

export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const router = useRouter();

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();

        const body = { name, email, password };

        const res = await fetch(`/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        switch (res.status) {
            case 200: router.push('/login');
                alert("Registered. Now Login bitch!")
                break;
            default: alert(res)
        }
    }

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

                <form onSubmit={registerUser} className="mt-8 space-y-6">
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
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPass(e.target.value)}
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