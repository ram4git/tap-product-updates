import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6 lg:mb-20 mt-8">
      <Link href="/">
        <div className="mx-auto flex items-end">
          <Image
            src="/svg/TAP_Color.svg"
            alt="TAP Logo"
            width="40"
            height="40"
            className="mx-auto-0 p-2"
          />
          <h1 className="text-center pl-4 text-2xl md:text-2xl font-bold leading-loose tap-title-red">
            News & Product Updates
          </h1>
        </div>
      </Link>
      <hr className="border-accent-2 my-4"></hr>
    </h2>
  );
}
