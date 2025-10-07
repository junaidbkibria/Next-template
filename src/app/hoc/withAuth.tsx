"use client";

import { useEffect, ComponentType } from "react";
import { useRouter, usePathname } from "next/navigation";

// List of pages where auth should automatically apply
export const protectedRoutes = ["/dashboard", "/profile", "/settings"]; // add routes here

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      // Only check auth for protected routes
      if (!protectedRoutes.includes(pathname)) return;

      // Check if access token cookie exists
      const hasAccessToken = document.cookie
        .split("; ")
        .some((row) => row.startsWith("access_token="));

      if (!hasAccessToken) {
        router.replace("/login"); // redirect if token not found
      }
    }, [pathname, router]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
