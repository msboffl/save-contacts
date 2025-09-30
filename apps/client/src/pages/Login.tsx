import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";

export function Login() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Logo />
        <LoginForm />
      </div>
    </>
  );
}
