import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> Königinnen von Beantown </h2>
      {
        <ul>
          {[1, 2, 3, 4, 5, 6].map((im) => (
            <Image src={`/${im}.png`} alt="me" width="300" height="420" />
          ))}
        </ul>
      }
    </main>
  );
}
