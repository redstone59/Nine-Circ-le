import clsx from "clsx";
export default function Icon({
  className,
  src,
  alt,
  backgroundSrc,
}: {
  className?: string;
  src: string;
  alt: string;
  backgroundSrc?: string;
}) {
  return (
    <div
      className="bg-cover p-12"
      style={{ backgroundImage: `url("${backgroundSrc}")` }}
    >
      <img className={clsx(className)} src={src} alt={alt} />
    </div>
  );
}
