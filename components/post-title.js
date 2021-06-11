export default function PostTitle({children}) {
  return (
    <p className="text-4xl py-2 lg:text-6xl font-bold tracking-tighter leading-loose md:leading-none text-center md:text-left">
      <span className="tap-title">{children}</span>
    </p>
  );
}
