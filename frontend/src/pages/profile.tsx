import Layout from "../components/Layout";
import React from "react";
import { FormEvent, useState } from "react";
import { useProfileQuery } from "@/graphql/generated/schema";
import { useUpdateProfileMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Profile() {
  const [error, setError] = useState("");

  const [updateProfile] = useUpdateProfileMutation();

  const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  });

  if (!currentUser) return "Chargement...";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    console.log("Form data being sent:", formJSON);

    try {
      //sends new user

      const res = await updateProfile({ variables: { data: formJSON } });
      console.log({ res });
      alert("Profil mis a jour.");
    } catch (e: any) {
      console.log("Form data being sent:", formJSON);
      console.error("Error registering user:", e);

      setError("Un erreur est survenue");
    }
  };

  return (
    <Layout pageTitle="le Jardin De La Sorciere">
      <div className="w-6/12 justify-center mx-auto p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
        <h2 className="text-lg text-gray-200 mb-4">
          Donnés Compte • Modifier Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2 w-full">
          <div className="w-full">
            <div>
              <label
                htmlFor="username"
                className="block  font-medium text-md text-gray-200"
              >
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                defaultValue={currentUser.profile.username}
                minLength={2}
                maxLength={30}
                className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="avatar"
                className="block  font-medium text-md text-gray-200"
              >
                Avatar
              </label>
              <input
                required
                type="url"
                name="avatar"
                id="avatar"
                defaultValue={currentUser.profile.avatar}
                className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>

            {error !== "" && <pre className="text-red-700">{error}</pre>}

            
              <button className="mt-4 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
                Modifier Profile
              </button>
            
          </div>
        </form>
      </div>
    </Layout>
  );
}
