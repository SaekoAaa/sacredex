import List from "./list"
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <div>
        <List />
        <section className="contentbox">{children}</section>
        </div>
    )
  }