import "./globals.css"
import localFont from "next/font/local"

const myFont = localFont({
  src: './Fonts/HarryP-MVZ6w.ttf',
  display: 'swap'
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>{children}</body>
    </html>
  );
}
