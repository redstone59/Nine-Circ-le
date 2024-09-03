import React from "react";

export default function ColouredBox({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl bg-dark-red p-2 ${className}`}>{children}</div>
  );
}
