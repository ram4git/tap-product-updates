export default function PostTitle({children}) {
  return (
    <p className="text-4xl py-2 lg:text-6xl font-bold  text-center md:text-left">
      <span className="tap-title tracking-normal leading-none md:leading-none">
        {children}
      </span>
    </p>
  );
}
