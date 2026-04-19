// Root layout — html/body are provided by [locale]/layout.tsx
// to allow locale-specific lang attribute
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as unknown as React.JSX.Element;
}
