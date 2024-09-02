import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Steven Nguyen's Resume",
  description: "Steven Nguyen's resume",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  )
}
