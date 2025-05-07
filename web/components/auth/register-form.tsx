"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthFooterLink } from "@/components/auth/auth-card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  termsAndConditions: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: true,
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Register data:", data);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful registration
      console.log("Registration successful");
      // Navigate to login page or email verification page
      // router.push("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
      form.setError("root", {
        message: "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="name@example.com" 
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
              <FormLabel>Mot de Passe</FormLabel>
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
        
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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
        
        <FormField
          control={form.control}
          name="termsAndConditions"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isLoading}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  I agree to the{" "}
                  <a 
                    href="/terms" 
                    className="text-primary hover:underline transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a 
                    href="/privacy" 
                    className="text-primary hover:underline transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </a>
                </FormLabel>
              </div>
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
          className="w-full mt-6" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create account"
          )}
        </Button>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <AuthFooterLink href="/auth/login">
            Sign in
          </AuthFooterLink>
        </div>
      </form>
    </Form>
  );
}