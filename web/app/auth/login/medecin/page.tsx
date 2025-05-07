import React from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | HealthConnect",
  description: "Sign in to your HealthConnect account",
};

export default function LoginPage() {
  return (
    <AuthCard 
      title="Welcome back" 
      description="Sign in to your account"
    >
      <OAuthButtons className="mb-6" />
      <LoginForm />
    </AuthCard>
  );
}