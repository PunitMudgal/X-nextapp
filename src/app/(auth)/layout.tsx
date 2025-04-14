import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | X",
  description: "Login and register page for X app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}
