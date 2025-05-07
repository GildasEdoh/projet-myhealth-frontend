import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, title, description, footer, className }: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md shadow-lg", className)}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        {description && (
          <CardDescription className="text-center">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter className="flex flex-col">{footer}</CardFooter>}
    </Card>
  );
}

export function AuthCardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 text-sm text-center text-muted-foreground">{children}</div>;
}

export function AuthFooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-primary hover:underline transition-all duration-200">
      {children}
    </Link>
  );
}