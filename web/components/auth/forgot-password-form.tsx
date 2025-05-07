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

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordFormValues) {
    setIsLoading(true);
    
    // Here you would connect to your authentication backend
    console.log("Forgot password data:", data);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Mock successful submission
      setIsSuccess(true);
    } catch (error) {
      console.error("Password reset request failed:", error);
      form.setError("root", {
        message: "Failed to send reset link. Please try again.",
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
            Password reset link sent to {form.getValues().email}. Please check your inbox.
          </AlertDescription>
        </Alert>
        <p className="text-sm text-muted-foreground text-center">
          Didn't receive the email? Check your spam folder or{" "}
          <button 
            type="button"
            onClick={() => setIsSuccess(false)}
            className="text-primary hover:underline transition-all duration-200"
          >
            try again
          </button>
        </p>
        <div className="text-center text-sm mt-6">
          Back to{" "}
          <AuthFooterLink href="/auth/login">
            Sign in
          </AuthFooterLink>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Enter your email address and we'll send you a link to reset your password.
        </div>
        
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
              Sending reset link...
            </>
          ) : (
            "Send reset link"
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