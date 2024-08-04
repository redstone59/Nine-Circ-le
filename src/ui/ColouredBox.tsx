import React from "react";
import clsx from "clsx";

export default function ColouredBox({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "bg-dark-red rounded")}>{children}</div>
  );
}
