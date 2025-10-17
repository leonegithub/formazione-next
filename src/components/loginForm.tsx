"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoadingButton from "./LoadingButton";
import ErrorMessage from "./errorMessage";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface LoginDictionary {
  login: {
    title: string;
  }
}

function LoginForm({ lang }: { lang: "it" | "en" | "es"}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dict, setDict] = useState<LoginDictionary | null>(null);
  const router = useRouter();
  const { setUserId } = useAuth();

  React.useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  if (!dict) return null; // oppure uno spinner

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget.closest("form") as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://php.leone.it/api/ws_leone/LogUser.php", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ExitCode === 0) {
          const idUser = data.ReturnedObject.IDUser;
          setUserId(idUser);
          document.cookie = `idUser=${idUser}; path=/; max-age=86400`;
          router.push(`/${lang}/personal-area`);
        } else {
          setErrorMessage(data.ReturnedError.join(", "));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  const togglePasswordType = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const passwordInput = document.getElementById("IN_Pwd") as HTMLInputElement;
    const togglePasswordIcon = event.currentTarget;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordIcon.classList.remove("fa-eye");
      togglePasswordIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      togglePasswordIcon.classList.remove("fa-eye-slash");
      togglePasswordIcon.classList.add("fa-eye");
    }
  };

  return (
    <div className="container">
      <div className="max-w-5xl  p-6">
        <h3 className="mb-6 text-xl font-semibold">
          {dict.login.title}
        </h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              id="IN_Pwd"
              name="password"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
            <i
              className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              id="togglePassword"
              onClick={togglePasswordType}
            ></i>
          </div>
          <div className="mb-5">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                onClick={handleLogin}
                type="submit"
                className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </button>
            )}
          </div>
        </form>

{lang === "en" ? (
  <>
    <p className="text-sm mb-2">
      If you do not yet have a Leone account (symposium.leone.it,
      3dleone.it),{" "}
      <Link className="blue hover:underline" href={`/${lang}/register`}>
        register now&nbsp;
      </Link>
      to have access to our services.
    </p>
    <p className="text-sm">
      <Link className="blue hover:underline" href={`/${lang}/reset`}>
        Did you forget your password?
      </Link>
    </p>
    <p className="error-message">
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </p>
  </>
) : lang === "es" ? (
  <>
    <p className="text-sm mb-2">
      Si aún no tienes una cuenta Leone (symposium.leone.it,
      3dleone.it),{" "}
      <Link className="blue hover:underline" href={`/${lang}/register`}>
        regístrate ahora&nbsp;
      </Link>
      para acceder a nuestros servicios.
    </p>
    <p className="text-sm">
      <Link className="blue hover:underline" href={`/${lang}/reset`}>
        ¿Olvidaste tu contraseña?
      </Link>
    </p>
    <p className="error-message">
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </p>
  </>
) : (
  <>
    <p className="text-sm mb-2">
      Se ancora non hai un account Leone (symposium.leone.it,
      3dleone.it),{" "}
      <Link className="blue hover:underline" href={`/${lang}/register`}>
        registrati adesso&nbsp;
      </Link>
      per avere accesso ai nostri servizi.
    </p>
    <p className="text-sm">
      <Link className="blue hover:underline" href={`/${lang}/reset`}>
        Hai dimenticato la password?
      </Link>
    </p>
    <p className="error-message">
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </p>
  </>
)}

      </div>
    </div>
  );
}

export default LoginForm;