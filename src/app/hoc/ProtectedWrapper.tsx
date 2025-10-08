"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { protectedRoutes } from "./withAuth";
import Unauthorized from "../components/Unauthorized/Unauthorized";

interface Props {
  children: ReactNode;
}

export default function ProtectedWrapper({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      if (!protectedRoutes.includes(pathname)) {
        setIsAuthorized(true); // no need to check auth for public routes
        return;
      }

      const hasAccessToken = document.cookie
        .split("; ")
        .some((row) => row.startsWith("access_token="));

      if (!hasAccessToken) {
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
    };

    checkAuth();
  }, [pathname]);

  // While checking, show nothing or a loader if you want
  if (isAuthorized === null) return null;

  // If unauthorized, show the Unauthorized component
  if (!isAuthorized) return <Unauthorized />;

  // Otherwise, show the children
  return <>{children}</>;
}
