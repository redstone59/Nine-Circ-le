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
  const widthClass = "w-16";
  if (backgroundSrc) {
    return (
      <div
        className={`${widthClass} bg-cover p-2`}
        style={{ backgroundImage: `url("${backgroundSrc}")` }}
      >
        <img className={className} src={src} alt={alt} />
      </div>
    );
  } else {
    return <img className={clsx(className, widthClass)} src={src} alt={alt} />;
  }
}
