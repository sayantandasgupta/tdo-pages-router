'use client';

import { FormEvent, useState } from "react";
import { Button } from "../button";

export default function CreateTaskForm() {
    const [task, setTask] = useState('');

    const createTask = async (e: FormEvent) => {
        e.preventDefault();

        const body = { task };

        const res = await fetch(`/api/task/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (res.status === 200) {
            alert('New Task Created!')
        }
    }

    return (
        <form className="flex flex-row gap-4 p-3" onSubmit={createTask}>
            <input
                id="task"
                name="task"
                type="text"
                className="appearance-none h-10 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter task name"
                required={true}
            />
            <Button className="h-10">
                Create
            </Button>
        </form>
    );
}