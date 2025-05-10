"use client";

import { Button as ShadButton } from "@/components/ui/button";
import { Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { HopitalDetailForm, HopitalContactForm } from "./register-cards";
import { DoctorCoordonnesForm } from "./register/doctor-coordonnes-form";
import { DoctorHealthCenterForm } from "./register/doctor-health-center-from";
import { DoctorPersoInfoForm } from "./register/doctor-perso-info-from";

interface MultiStepFormProps {
  className?: string;
}

const steps = ["Type de compte", "Détails", "Confirmation", "Hello"];

let isMedecin = true;

export function MultiStepForm({ className }: MultiStepFormProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className={className}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-6 text-sm">
        {activeStep === steps.length ? (
          // Add here what will be displayed when the form is completed
          <p className="text-green-600 font-medium">Votre compte est en cours de création</p>
        ) : (
          <>
            <p className="mb-4">
              Étape {activeStep + 1} : <strong>{getStepContent(activeStep)}</strong>
            </p>

            <div className="p-4">
              {renderStepContent(activeStep)}
            </div>

            <div className="flex justify-between gap-2">
              <ShadButton
                variant="outline"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Précédent
              </ShadButton>
              <ShadButton
                onClick={handleNext}
                disabled={activeStep === steps.length}
              >
                {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
              </ShadButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function renderStepContent(step: number) {
  const handleRoleChange = (role: "medecin" | "hopital") => {
    console.log("Rôle sélectionné :", role);
    isMedecin = role === "medecin";
    console.log("isMedecin:", isMedecin);
  };
  switch (step) {
    case 0:
      return <OAuthButtons className="m-6" onRoleSelect={handleRoleChange}/>;
    case 1:
      return isMedecin ? <DoctorPersoInfoForm /> : <HopitalDetailForm />;
    case 2:
      return isMedecin ? <DoctorHealthCenterForm /> :  <HopitalContactForm />;
    case 3:
      return isMedecin ? <DoctorCoordonnesForm /> :  <HopitalContactForm />;
    default:
      return "Unknown step";
  }
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return "Type de compte";
    case 1:
      return isMedecin ? "Vos informations personnelles" : "Informations de l'hôpital";
    case 2:
      return isMedecin ? "Entrez vos détails" : "Contacts de l'hôpital";
    case 3:
      return isMedecin ? "Entrez vos détails" : "Conditions d'utilisation";
    default:
      return "Unknown step";
  }
}