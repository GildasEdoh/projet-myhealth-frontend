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
import axios from 'axios';
import { setTokens } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { Tokens } from '@/types/tokens';

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Login data:", data);
    const username = data.username
    const password = data.password
    
    // Simulate API call
    try {
      console.log("Calling login API with this credentials -> ", username, ", ", password)
      const res = await axios.post<Tokens>('http://127.0.0.1:8000/api/login/', { username, password });
      setTokens(res.data);
      router.push('/dashboard');
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input 
                  placeholder="kabao" 
                  {...field} 
                  disabled={isLoading}
                  className="transition-all duration-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Mot de passe</FormLabel>
                <Link 
                  href="/auth/forgot-password" 
                  className="text-xs text-primary hover:underline transition-all duration-200"
                >
                  Mot de passe oublié?
                </Link>
              </div>
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

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connexion...
            </>
          ) : (
            "Continuer"
          )}
        </Button>

        <div className="text-center text-sm">
          Pas de compte?{" "}
          <AuthFooterLink href="/auth/register">
            Créer un compte
          </AuthFooterLink>
        </div>
      </form>
    </Form>
  );
}