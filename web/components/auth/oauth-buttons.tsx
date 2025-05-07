"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Stethoscope, Hospital } from "lucide-react";
import { useState } from "react";

interface OAuthButtonsProps {
  className?: string;
}

export function OAuthButtons({ className }: OAuthButtonsProps) {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleOAuthSignIn = async (provider: "google" | "github") => {
//     setIsLoading(true);
//     try {
//       // This would be replaced with your actual OAuth implementation
//       console.log(`Sign in with ${provider}`);
//       // Mock delay to simulate network request
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//     } catch (error) {
//       console.error(`Error signing in with ${provider}:`, error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

  const [selectedRole, setSelectedRole] = useState<"medecin" | "hopital">("medecin");

  const handleRoleSelect = (role: "medecin" | "hopital") => {
    setSelectedRole(role);
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4">
        {/* <Button
          variant="outline"
          disabled={isLoading}
          onClick={() => handleOAuthSignIn("google")}
          className="bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
        >
          <Stethoscope className="mr-2 h-4 w-4" />
          Medecin
        </Button>
        <Button
          variant="outline" 
          disabled={isLoading}
          onClick={() => handleOAuthSignIn("github")}
          className="bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
        >
          <Hospital className="mr-2 h-4 w-4" />
          Hôpital
        </Button> */}

        <Button
          variant="outline"
          onClick={() => handleRoleSelect("medecin")}
          className={`${
            selectedRole === "medecin"
              ? "bg-black text-white"
              : "bg-white text-black border-gray-300"
          } `}
        >
          <Stethoscope className="mr-2 h-4 w-4" />
          {/* {selectedRole === "medecin" ? "Médecin" : "Médecin"} */}
          Médecin
        </Button>
        <Button
          variant="outline"
          onClick={() => handleRoleSelect("hopital")}
          className={`${
            selectedRole === "hopital"
              ? "bg-black text-white"
              : "bg-white text-black border-gray-300"
          }`}
        >
          <Hospital className="mr-2 h-4 w-4" />
          {/* {selectedRole === "hopital" ? "Hôpital" : "HôpitalHôpital"} */}
          Hôpital
        </Button>
      </div>

      {/* <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-xs text-muted-foreground">
            OR CONTINUE WITH
          </span>
        </div>
      </div> */}
    </div>
  );
}