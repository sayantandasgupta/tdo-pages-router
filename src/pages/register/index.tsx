import AppIcon from "@/components/app-logo";
import RegisterForm from "@/components/register/register-form";


export default function RegisterPage() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-10 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <AppIcon />
            </div>
            <RegisterForm />
        </main>
    );
}