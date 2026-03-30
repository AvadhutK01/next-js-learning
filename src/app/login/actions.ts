"use server";

import { signIn, signOut } from "@/auth";

import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(prevState: any, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (isRedirectError(error)) throw error;
    if ((error as Error).message.includes("CredentialsSignin")) {
      return {
        error: "Invalid email or password. Please try again.",
      };
    }
    throw error;
  }
}

export async function githubLoginAction() {
  await signIn("github");
}

export async function logoutAction() {
  await signOut();
}
