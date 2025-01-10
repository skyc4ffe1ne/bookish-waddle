export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="max-w-[52rem] pt-20 w-full mx-auto">{children}</main>
}
