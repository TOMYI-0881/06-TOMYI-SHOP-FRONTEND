import { loginAction } from "@/auth/actions/login.action";
import { SocialButtons } from "@/auth/components/SocialButtons";
import { CustomLogo } from "@/components/custom/CustomLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginForm = ({ onSwitch }: { onSwitch: () => void }) => {
  const navigate = useNavigate();

  const [isPosting, setIsPosting] = useState(false);

  const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPosting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.log({ error });
      toast.error("Correo o/y contraseña no validos");
      setIsPosting(false);
    }
  };

  return (
    <div>
      <CustomLogo />
      <p className="mt-2 text-sm text-muted-foreground">
        Inicia sesión con tu cuenta.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleLogin}>
        <div>
          <label className="text-sm font-semibold">Correo electrónico</label>
          <Input
            id="email"
            type="email"
            //el parametro name es para que lo obgenta el formData
            name="email"
            placeholder="tu@email.com"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">Contraseña</label>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            //el parametro name es para que lo obgenta el formData
            name="password"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <Button
          className="h-11 w-full rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          type="submit"
          disabled={isPosting}
        >
          Iniciar sesión
        </Button>
      </form>

      <SocialButtons />

      <p className="mt-6 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Button
          onClick={onSwitch}
          variant="link"
          className="font-semibold underline underline-offset-4"
        >
          Registrarme
        </Button>
      </p>
    </div>
  );
};
