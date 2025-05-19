export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <main className="flex h-screen w-full font-inter">
        {children}
      </main>
    </body>
  </html>
  )
}
