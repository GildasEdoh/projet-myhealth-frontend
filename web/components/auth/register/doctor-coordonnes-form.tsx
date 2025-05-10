"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { CustomFormField } from "../register-cards";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Schéma de validation avec Zod
const doctorSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  telephone: z
    .string()
    .min(8, { message: "Le numéro de téléphone doit contenir au moins 8 caractères" }),
  address: z.string().min(3, { message: "L'adresse doit contenir au moins 3 caractères" }),
  ville: z.string().min(2, { message: "La ville doit contenir au moins 2 caractères" }),
});

type DoctorFormValues = z.infer<typeof doctorSchema>;

export function DoctorCoordonnesForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<DoctorFormValues>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      email: "",
      telephone: "",
      address: "",
      ville: "",
    },
  });

  async function onSubmit(data: DoctorFormValues) {
    setIsLoading(true);

    try {
      console.log("Données du formulaire :", data);
      // Simule une requête API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formulaire soumis avec succès !");
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      form.setError("root", {
        message: "Une erreur est survenue lors de la soumission. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          name="telephone_docteur"
          label="Numéro de téléphone"
          placeholder="(+228) 90 00 00 00"
          control={form.control}
          isLoading={isLoading}
        />
        
        <CustomFormField
          name="email_docteur"
          label="Addresse email"
          placeholder="exemple@gmail.com"
          control={form.control}
          isLoading={isLoading}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  disabled={isLoading}
                  className="transition-all duration-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ Confirmation du mot de passe */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmer le mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  disabled={isLoading}
                  className="transition-all duration-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />    

        {/* Affichage des erreurs globales */}
        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        {/* Bouton de soumission */}
        {/* <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "En cours..." : "Soumettre"}
        </Button> */}
      </form>
    </Form>
  );
}
