import { FC, ReactNode } from "react";
import Link from "next/link";

export interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  elevated?: boolean;
}

const Card: FC<CardProps> = ({ children, href, className = "", elevated = false }) => {
  const base = `bg-white rounded-lg border border-smu-border overflow-hidden ${
    elevated ? "shadow-md hover:shadow-lg" : ""
  } transition-shadow ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${base} hover:border-smu-blue`}>
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
};

export default Card;
