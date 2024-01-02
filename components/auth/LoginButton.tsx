"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter();
  function onClick() {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span> TODO: Implement Modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
