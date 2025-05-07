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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthCard 
        title="Connexion" 
        description="Connectez-vous à votre compte d'accès"
      >
        <OAuthButtons className="mb-6" />
        <LoginForm />
      </AuthCard>
    </div>
  );
}