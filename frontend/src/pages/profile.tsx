import Layout from "../components/Layout";
import React from "react";
import { FormEvent, useState } from "react";
import { useProfileQuery  } from "@/graphql/generated/schema";
// import {  useUpdateProfileMutation } from "@/graphql/generated/schema"; a deliniar no domingo
import { useRouter } from "next/router";




export default function Profile() {
  const [error, setError] = useState("");

  // const [updateProfile] = useUpdateProfileMutation()

  const {data: currentUser, client} = useProfileQuery({
    errorPolicy: 'ignore',
  });

  if(!currentUser) return 'Chargement...';


  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   setError("");
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   const formJSON: any = Object.fromEntries(formData.entries());
  //    console.log("Form data being sent:", formJSON);


  //   try {
  //     //sends new user

  //     const res = await updateProfile({ variables: { data: formJSON } });
  //     console.log({ res });
  //     alert(
  //       "You have succesfully registered a new account with us. Thank you."
  //     );
  //   } catch (e: any) {
  //     console.log("Form data being sent:", formJSON);
  //     console.error("Error registering user:", e);

  //     if (e.message === "EMAIL_ALREADY_TAKEN")
  //       setError("This email is already registered");
  //     else setError("An error occurred during registration. Please try again.");
  //   }
  // };

  return (
    <Layout pageTitle="le Jardin De La Sorciere">
      <div className="w-6/12 justify-center mx-auto p-10 bg-[#161B21] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-2xl">
        <h2 className="text-lg text-gray-200 mb-4">Donnés Compte • Modifier Profile</h2>

        <form  className="space-y-2 w-full">
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
                defaultValue={currentUser.profile.email}
                autoComplete=""
                className="mt-1 block w-full px-3 py-2 border text-gray-200 border-gray-700 bg-[#090B0D] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-700"
              />
            </div>

            
            {error !== "" && <pre className="text-red-700">{error}</pre>}

            <div className="mt-4">
              <button className=" py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
                Modifier Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
