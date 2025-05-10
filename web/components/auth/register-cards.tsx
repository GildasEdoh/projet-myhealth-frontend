"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthFooterLink } from "@/components/auth/auth-card";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";


const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;


interface CustomFormFieldProps {
  name: string; // Nom du champ
  label: string; // Label à afficher
  placeholder?: string; // Placeholder optionnel
  control: any; // Contrôle du formulaire (React Hook Form)
  isLoading?: boolean; // Indique si le champ est désactivé
}

export function CustomFormField({ name, label, placeholder, control, isLoading }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder || ""}
              {...field}
              disabled={isLoading}
              className="transition-all duration-200"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}


export function HopitalDetailForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Login data:", data);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful login
      console.log("Login successful");
      // Navigate to dashboard or homepage after successful login
      // router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      form.setError("root", {
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          name="type_etablissement"
          label="Type d'établissement"
          placeholder="Selctionnez"
          control={form.control}
        />
        <CustomFormField
          name="nom_etablissement"
          label="Nom"
          placeholder="Hopital Blanc Blanc"
          control={form.control}
        />
        {/* <CustomFormField
          name="address"
          label="Adresse"
          placeholder="Akodésséwa"
          control={form.control}
        /> */}
        
        {/* <CustomFormField
          name="ville"
          label="Ville"
          placeholder="Lomé"
          control={form.control}
        /> */}
        
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

        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

      </form>
    </Form>
  );
}

export function HopitalContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Login data:", data);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful login
      console.log("Login successful");
      // Navigate to dashboard or homepage after successful login
      // router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      form.setError("root", {
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          name="email"
          label="Email"
          placeholder="hopitalx@gmail.com"
          control={form.control}
        />
        <CustomFormField
          name="telephone"
          label="Teléphone"
          placeholder="+228 90 00 00 00"
          control={form.control}
        />
        <CustomFormField
          name="address"
          label="Adresse"
          placeholder="Akodésséwa"
          control={form.control}
        />
        <CustomFormField
          name="ville"
          label="Ville"
          placeholder="Lomé"
          control={form.control}
        />

        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

      </form>
    </Form>
  );
}


export function HopitalDonDeSangForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Login data:", data);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful login
      console.log("Login successful");
      // Navigate to dashboard or homepage after successful login
      // router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      form.setError("root", {
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          name="email"
          label="Email"
          placeholder="hopitalx@gmail.com"
          control={form.control}
        />
        <CustomFormField
          name="capacite_journaliere"
          label="Capacité journalière (Donneurs)"
          placeholder="+228 90 00 00 00"
          control={form.control}
        />
        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

      </form>
    </Form>
  );
}
