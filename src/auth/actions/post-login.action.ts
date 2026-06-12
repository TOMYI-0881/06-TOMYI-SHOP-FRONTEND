import { tesloApi } from "@/api/TesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const postLoginAction = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  //   const { params } = useParams();
  //   console.log({ params });
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    //throw interrumpe el flujo normal de ejecución
    //y propaga el error hacia los niveles superiores de la aplicación para que puedan manejarlo.

    //Cuando el backend responde con un código HTTP de error como:
    // 400 Bad Request
    // 401 Unauthorized
    // 403 Forbidden
    // 404 Not Found
    // 500 Internal Server Error

    // Axios rechaza la promesa automáticamente y el flujo entra al catch.
    throw error;
  }
};
