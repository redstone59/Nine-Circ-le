import React from "react";

export default function ColouredBox({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className} rounded-xl bg-dark-red p-2`}>{children}</div>
  );
}
