import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
