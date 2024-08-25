"use client";

import { useAuth, ClerkProvider } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string} appearance={{
    layout: { 
      socialButtonsVariant: 'iconButton',
      logoImageUrl: '/icons/auth-logo.svg'
    },
    variables: {
      colorBackground: '#15171c',
      colorPrimary: '',
      colorText: 'white',
      colorInputBackground: '#1b1f29',
      colorInputText: 'white',
    }
  }}>
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    {children}
    </ConvexProviderWithClerk>
    </ClerkProvider>;
}