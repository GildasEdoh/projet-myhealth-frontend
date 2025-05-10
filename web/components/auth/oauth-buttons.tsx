"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Stethoscope, Hospital } from "lucide-react";
import { useState } from "react";
interface OAuthButtonsProps {
  className?: string;
  onRoleSelect?: (role: "medecin" | "hopital") => void; // Fonction de rappel pour notifier le rôle sélectionné
}

export function OAuthButtons({ className, onRoleSelect }: OAuthButtonsProps) {
  const [selectedRole, setSelectedRole] = useState<"medecin" | "hopital">("medecin");

  // if (onRoleSelect) {
  //   onRoleSelect("medecin"); // Appelle la fonction de rappel avec le rôle sélectionné
  // }

  const handleRoleSelect = (role: "medecin" | "hopital") => {
    // console.log("Role -> ", role);
    setSelectedRole(role);
    // console.log(`Selected role: ${role}`);
    if (onRoleSelect) {
      onRoleSelect(role); // Appelle la fonction de rappel avec le rôle sélectionné
    }
  };



  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline_without_hover"
          onClick={() => handleRoleSelect("medecin")}
          className={`${
            selectedRole === "medecin"
              ? "bg-black text-white"
              : "bg-white text-black border-gray-300"
          } ${
            selectedRole === "medecin" ? "" : "hover:bg-gray-50"
          }`}
        >
          <Stethoscope className="mr-2 h-4 w-4" />
          Médecin
        </Button>
        <Button
          variant="outline_without_hover"
          onClick={() => handleRoleSelect("hopital")}
          className={`${
            selectedRole === "hopital"
              ? "bg-black text-white"
              : "bg-white text-black border-gray-300"
          } ${
            selectedRole === "hopital" ? "" : "hover:bg-gray-50"
          }`}
        >
          <Hospital className="mr-2 h-4 w-4" />
          Hôpital
        </Button>
      </div>
    </div>
  );
}