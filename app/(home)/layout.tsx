export default function Layout({ children }: LayoutProps<"/">) {
  return <div className="container py-6">{children}</div>;
}
