"use server";

import { login, logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (email === "user@example.com" && password === "password123") {
    await login(email);
    redirect("/");
  } else {
    return {
      error: "Invalid email or password. Please try again.",
    };
  }
}

export async function logoutAction() {
  await logout();
  redirect("/login");
}
