import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { LoginForm } from "@/auth/pages/login/LoginForm";
import { RegisterForm } from "@/auth/pages/register/RegisterPage";

type Mode = "login" | "register";

const ANIM_MS = 1100;
const IMAGES = [
  "/TOMYI.png",
  "/oferta_1.png",
  "/TOMYI2.png",
  "/TOMYI3.png",
  "/oferta_2.png",
];
const CAROUSEL_MS = 4500;

function getModeFromPath(pathname: string): Mode {
  return pathname.endsWith("register") ? "register" : "login";
}

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const mode = getModeFromPath(location.pathname);
  const [displayMode, setDisplayMode] = useState<Mode>(() =>
    getModeFromPath(location.pathname),
  );
  const [slide, setSlide] = useState(0);
  const isRegister = mode === "register";
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mode === displayMode) return;
    timeoutRef.current = setTimeout(() => setDisplayMode(mode), ANIM_MS / 2);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mode, displayMode]);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % IMAGES.length);
    }, CAROUSEL_MS);
    return () => clearInterval(id);
  }, []);

  const switchTo = (next: Mode) => {
    navigate(next === "register" ? "/auth/register" : "/auth/login");
  };
  const showRegister = displayMode === "register";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md md:max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm border border-border h-auto md:h-[600px] animate-mobile-reveal md:animate-none">
          <div
            className="hidden md:block absolute top-0 h-full w-1/2 z-10 transition-[left] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ left: isRegister ? "0%" : "50%" }}
          >
            <div className="relative h-full w-full overflow-hidden">
              {IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Familia"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === slide ? 1 : 0 }}
                />
              ))}
            </div>
          </div>

          <div
            className={`relative md:absolute top-0 h-auto md:h-full w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 md:transition-[left] md:duration-[1100ms] md:ease-[cubic-bezier(0.65,0,0.35,1)] ${isRegister ? "md:left-1/2" : "md:left-0"}`}
          >
            <div
              key={displayMode}
              className="w-full max-w-sm animate-fade-in-up"
            >
              {showRegister ? (
                <RegisterForm onSwitch={() => switchTo("login")} />
              ) : (
                <LoginForm onSwitch={() => switchTo("register")} />
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Al hacer clic en continuar, aceptas nuestros{" "}
          <a className="underline" href="#">
            Términos de Servicio
          </a>{" "}
          y{" "}
          <a className="underline" href="#">
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </div>
  );
}
