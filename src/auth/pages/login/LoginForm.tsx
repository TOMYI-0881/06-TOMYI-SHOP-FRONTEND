import { SocialButtons } from "@/auth/components/SocialButtons";
import { CustomLogo } from "@/components/custom/CustomLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div>
      <CustomLogo />
      <p className="mt-2 text-sm text-muted-foreground">
        Inicia sesión con tu cuenta.
      </p>

      <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-sm font-semibold">Correo electrónico</label>
          <Input
            id="email"
            type="email"
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
            className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <Button
          className="h-11 w-full rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          type="submit"
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
}
