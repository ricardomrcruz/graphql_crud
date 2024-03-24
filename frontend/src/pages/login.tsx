import Layout from "../components/Layout";
import React from "react";
import { FormEvent, useState } from "react";
import { useLoginMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import Link from "next/link";

function validatePassword(p: string) {
  let errors = [];
  if (p.length < 8)
    errors.push("Le mot de passe doit faire minimum 8 caractères");
  if (p.search(/[a-z]/) < 0)
    errors.push("Le mot de passe doit contenir une minuscule");
  if (p.search(/[A-Z]/) < 0)
    errors.push("Le mot de passe doit contenir une majuscule");
  if (p.search(/[0-9]/) < 0)
    errors.push("Le mot de passe doit contenir un chiffre");

  return errors;
}

export default function Login() {
  const [error, setError] = useState("");
  const [login] = useLoginMutation();
  const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    console.log("Form data being sent:", formJSON);

    const errors = validatePassword(formJSON.password);
    if (errors.length > 0) return setError(errors.join("\n"));

    try {
      //sends new user

      const res = await login({ variables: { data: formJSON } });
      console.log({ res });
      alert("Bienvenue de noveaux au Jardin de la Sorciere.");
    } catch (e: any) {
      setError("Identifiants Pas Valide");
    } finally {
      client.resetStore();
    }
  };

  return (
    <Layout pageTitle="le Jardin De La Sorciere • Login">
      {currentUser ? (
        <div>
          {" "}
          Vous êtes connecté en tant que {currentUser.profile.username}{" "}
          {currentUser.profile.email} .
          <Link href="/" passHref>
            <button className=" py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
              Retoourne au shopping.-
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-4/12 justify-center mx-auto p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
            <h2 className="text-xl text-gray-200 mb-4">Login • Welcome Back</h2>

            <form onSubmit={handleSubmit} className="space-y-2 w-full">
              <div className="w-full">
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block  font-medium text-md text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete=""
                    className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="block  font-medium text-md text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
                  />
                </div>
                {error !== "" && <pre className="text-red-700">{error}</pre>}

                <div className="mt-4">
                    <button className=" py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
                      Login
                    </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </Layout>
  );
}
