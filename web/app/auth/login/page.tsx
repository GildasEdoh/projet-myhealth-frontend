import React from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion | MyHealth",
  description: "Sign in to your MyHealth account",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthCard 
        title="Connexion" 
        description="Connectez-vous à votre compte d'accès"
      >
        <OAuthButtons className="mb-6" />
        <LoginForm />
      </AuthCard>
    </div>
  );
}

// 'use client';
// import { useState } from 'react';
// import axios from 'axios';
// import { setTokens } from '@/lib/auth';
// import { useRouter } from 'next/navigation';
// import { Tokens } from '@/types/tokens';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post<Tokens>('http://127.0.0.1:8000/api/login/', { username, password });
//       setTokens(res.data);
//       router.push('/dashboard');
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="p-4">
//       <input className="border p-2 mb-2 block" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
//       <input className="border p-2 mb-2 block" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
//       <button className="bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
