import './globals.css'
import Footer from './footer'
import Header from './header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <section>
      <Header />
        {children}
        <Footer />
        </section>
        </body>
    </html>
  )
}
