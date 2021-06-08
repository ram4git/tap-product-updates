export default function PostTitle({children}) {
  return (
    <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-loose md:leading-none text-center md:text-left tap-title">
      {children}
    </h1>
  );
}
