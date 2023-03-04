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
        <div className='bgbl'></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
