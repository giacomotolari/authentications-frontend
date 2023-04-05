import "../globals.css";

export const metadata = {
  title: "Profile",
};

export default function Profileyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="profile-layout">{children}</div>;
}
