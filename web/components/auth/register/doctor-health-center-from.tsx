"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { CustomFormField } from "../register-cards";
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

export function DoctorHealthCenterForm() {
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
        {/* Champ Ville */}
        <FormField
            control={form.control}
            name="type_structure"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Type d'établissement</FormLabel>
            <FormControl>
                <select
                {...field}
                disabled={isLoading}
                className="w-full border rounded p-2 transition-all duration-200"
                >
                <option value="">Sélectionnez</option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
                </select>
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        
        <CustomFormField
          name="nom_hopital"
          label="Nom de l'établissement"
          placeholder="Centre de santé de doganto"
          control={form.control}
          isLoading={isLoading}
        />
        
        <CustomFormField
          name="adresse"
          label="Addresse"
          placeholder="doganto, kpota"
          control={form.control}
          isLoading={isLoading}
        />

        {/* Champ Téléphone */}
        <CustomFormField
          name="ville"
          label="Ville"
          placeholder="koffi"
          control={form.control}
          isLoading={isLoading}
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
