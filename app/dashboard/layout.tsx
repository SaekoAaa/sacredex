import List from "./list"
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <div>
        <List />
        <div className="contentbox">{children}</div>
        </div>
    )
  }