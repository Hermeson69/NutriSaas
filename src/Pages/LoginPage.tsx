import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/sign-up-form";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {isLogin ? (
          <LoginForm onToggleForm={() => setIsLogin(false)} />
        ) : (
          <SignUpForm onToggleForm={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
