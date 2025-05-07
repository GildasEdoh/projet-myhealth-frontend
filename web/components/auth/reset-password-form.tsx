"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthFooterLink } from "@/components/auth/auth-card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const resetPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

interface ResetPasswordFormProps {
  token?: string;
}

export function ResetPasswordForm({ token = "" }: ResetPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: ResetPasswordFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Reset password data:", { ...data, token });
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful submission
      setIsSuccess(true);
    } catch (error) {
      console.error("Password reset failed:", error);
      form.setError("root", {
        message: "Failed to reset password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="space-y-4">
        <Alert className="bg-primary-foreground border-primary">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertDescription>
            Your password has been successfully reset.
          </AlertDescription>
        </Alert>
        <div className="text-center text-sm mt-6">
          <Button asChild className="w-full">
            <AuthFooterLink href="/auth/login">
              Back to sign in
            </AuthFooterLink>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Enter your new password below.
        </div>
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
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
              <FormLabel>Confirm New Password</FormLabel>
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
          className="w-full mt-2" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Resetting password...
            </>
          ) : (
            "Reset password"
          )}
        </Button>

        <div className="text-center text-sm">
          Back to{" "}
          <AuthFooterLink href="/auth/login">
            Sign in
          </AuthFooterLink>
        </div>
      </form>
    </Form>
  );
}