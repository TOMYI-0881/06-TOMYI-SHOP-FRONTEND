import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { cn } from "@/lib/utils";
import { CustomLogo } from "@/components/custom/CustomLogo";
export const CustomHeader = () => {
  const [searchParmas, setSearchParams] = useSearchParams();
  const { gender } = useParams();
  console.log({ gender });

  const inputRef = useRef<HTMLInputElement>(null);
  const queryParams = searchParmas.get("query") || "";

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    const query = inputRef.current?.value;

    const newSearchParams = new URLSearchParams();

    //cargas acomulativas del newSearchParams que luego seran aplicadas al setSearchParams
    if (!query) {
      //esto realmente no hace nada, lo hago asi para ser mas declarativo lo que se va hacer cuando el valor del imput sea
      //"", si quitamos esto  newSearchParams.delete("query"); va a seguir funcionando correctamente que es borrar
      //la query de la url cuando su valor sea ""
      newSearchParams.delete("query");
    } else {
      newSearchParams.set("query", inputRef.current!.value);
    }
    setSearchParams(newSearchParams);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <CustomLogo />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                !gender ? "underline underline-offset-4" : "",
              )}
            >
              Todos
            </Link>
            <Link
              to="gender/men"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "men" ? "underline underline-offset-4" : "",
              )}
            >
              Hombres
            </Link>
            <Link
              to="gender/women"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "women" ? "underline underline-offset-4" : "",
              )}
            >
              Mujeres
            </Link>
            <Link
              to="gender/kid"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "kid" ? "underline underline-offset-4" : "",
              )}
            >
              Niños
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                  ref={inputRef}
                  onKeyDown={handleSearch}
                  defaultValue={queryParams}
                  key={queryParams}
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/auth/login">
              <Button variant="default" size="sm" className="ml-2">
                Login
              </Button>
            </Link>

            <Link to="/admin">
              <Button variant="destructive" size="sm" className="ml-2">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
