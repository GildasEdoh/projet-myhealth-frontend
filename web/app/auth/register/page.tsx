
import React from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { MultiStepForm } from "@/components/auth/register-form";
import { Metadata } from "next";
// import { MultiStepForm } from "@/components/auth/test";

export const metadata: Metadata = {
  title: "Sign Up | HealthConnect",
  description: "Create a new HealthConnect account",
};

export default function RegisterPage() {
  return (
    <div className="m-4 flex justify-center items-center min-h-screen bg-gray-50">
      <AuthCard 
        title="Créer un compte" 
        description="Inscrivez-vous pour accéder à toutes les fonctionnalités"
        className="w-full"
      >
        {/* <OAuthButtons className="mb-6" />
        <RegisterForm /> */}
        {/* <MultiStepRegisterForm /> */}
        <MultiStepForm className="bg-white p-6 rounded-lg  w-full max-w-lg" />
      </AuthCard>
    </div>
  );
}
