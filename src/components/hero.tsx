import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div>
      <Image
        src="/assets/images/image-web-3-desktop.jpg"
        alt="Hero image"
        className="md:block hidden object-cover w-full"
        width={1440}
        height={0}
      />
      <Image
        src="/assets/images/image-web-3-mobile.jpg"
        alt="Hero image"
        className="md:hidden object-cover w-full"
        width={1440}
        height={0}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-4 justify-center">
        <h1 className="text-6xl font-bold text-destructive-foreground">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-lg">
            We dive into the next evolution of web that claims to put the power
            of platforms back into the hands of the people. But is it really
            fulfilling its promise?
          </p>
          <Button className="font-bold uppercase" variant={"destructive"}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
