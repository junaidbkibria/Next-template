"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { protectedRoutes } from "./withAuth";

interface Props {
  children: ReactNode;
}

export default function ProtectedWrapper({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // Only check auth for protected routes
      if (!protectedRoutes.includes(pathname)) {
        setIsChecking(false);
        return;
      }

      // Check if access_token cookie exists
      const hasAccessToken = document.cookie
        .split("; ")
        .some((row) => row.startsWith("access_token="));

      if (!hasAccessToken) {
        router.replace("/login");
      } else {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  // Show nothing until auth check completes
  if (isChecking) return null;

  return <>{children}</>;
}
