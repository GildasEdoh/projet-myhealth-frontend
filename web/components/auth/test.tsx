"use client";

import { Button as ShadButton } from "@/components/ui/button";
import { Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

interface MultiStepFormProps {
  className?: string;
}

const steps = ["Email", "Détails", "Confirmation"];

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
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="mt-6 text-sm">
        {activeStep === steps.length ? (
          <p className="text-green-600 font-medium">Toutes les étapes sont terminées !</p>
        ) : (
          <>
            <p className="mb-4">
              Étape {activeStep + 1} : <strong>{steps[activeStep]}</strong>
            </p>
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
