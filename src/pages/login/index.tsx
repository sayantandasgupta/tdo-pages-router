import AppIcon from '@/pages/ui/app-logo';
import LoginForm from '@/pages/ui/login/login-form';

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-10 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <AppIcon />
            </div>
            <LoginForm />
        </main>
    );
}