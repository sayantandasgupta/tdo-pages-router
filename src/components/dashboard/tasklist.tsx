import { fetcher } from "@/lib/fetcher";
import clsx from "clsx";
import useSWR from "swr";
import TaskStatus from "./status";

type Task = {
    id: number,
    task: string,
    status: boolean,
    userId: string,
}

export default function TaskList() {

    const { data, isLoading } = useSWR(`/api/task/fetch`, fetcher);

    if (isLoading) return (<div>Loading...</div>);

    if (!data) throw new Error("Could not find data");

    const todos: Task[] = data['data'];

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {todos?.map((todo) => (
                            <div
                                key={todo.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{todo.task}</p>
                                        </div>
                                    </div>
                                    <TaskStatus status={todo.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                {/* <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    {' '}
                                </th> */}
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Task
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Status
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {todos?.map((todo) => (
                                <tr
                                    key={todo.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    {/* <td className="whitespace-nowrap px-3 py-3">
                                        <ToggleTask id={todo.id} status={todo.status} />
                                    </td> */}
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className={
                                            clsx(
                                                "flex items-center gap-3",
                                                {
                                                    "line-through": todo.status === true
                                                }
                                            )
                                        }>
                                            <p>{todo.task}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        <TaskStatus status={todo.status} />
                                    </td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            {/* <DeleteTask id={todo.id} /> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}