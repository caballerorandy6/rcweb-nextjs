import Image from "next/image";

const BgCover = () => {
  return (
    <div className="fixed -z-10 w-full h-full img-effect block">
      <Image
        className="mix-blend-overlay"
        fill
        style={{ objectFit: "cover" }}
        src="/background.JPG"
        alt="Background Image"
        priority={true}
      />
    </div>
  );
};

export default BgCover;
