import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to BlockSecure!</h1>
      <Link href="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}
