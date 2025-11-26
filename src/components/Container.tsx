import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className ? className : ""}`}>
      {children}
    </div>
  );
}
