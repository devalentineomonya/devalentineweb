import Image from "next/image";

interface FrameProps {
  src: string;
  alt: string;
  sizes: string;
}

const screenClassName =
  "object-cover object-top grayscale contrast-[1.1] transition-all duration-500 group-hover:grayscale-0";

export const BrowserFrame = ({
  src,
  alt,
  sizes,
  domain,
}: FrameProps & { domain: string }) => (
  <div className="flex h-full w-full flex-col border border-black bg-white">
    <div className="flex h-7 shrink-0 items-center gap-3 border-b border-black px-3">
      <div className="flex w-10 gap-1.5">
        <span className="h-2 w-2 bg-black" />
        <span className="h-2 w-2 border border-black" />
        <span className="h-2 w-2 border border-black" />
      </div>
      <span className="mx-auto truncate border border-black px-3 font-mono text-[10px] leading-4 text-gray-600">
        {domain}
      </span>
      <span className="w-10" aria-hidden="true" />
    </div>
    <div className="relative flex-1 overflow-hidden bg-gray-100">
      <Image src={src} alt={alt} fill sizes={sizes} className={screenClassName} />
    </div>
  </div>
);

export const PhoneFrame = ({ src, alt, sizes }: FrameProps) => (
  <div className="relative h-full w-full rounded-[40px] bg-black p-[7px]">
    <span className="absolute -left-[3px] top-24 h-8 w-[3px] bg-black" />
    <span className="absolute -left-[3px] top-36 h-14 w-[3px] bg-black" />
    <span className="absolute -left-[3px] top-52 h-14 w-[3px] bg-black" />
    <span className="absolute -right-[3px] top-40 h-20 w-[3px] bg-black" />
    <div className="relative h-full overflow-hidden rounded-[33px] bg-white">
      <div className="flex h-11 items-center justify-between px-6 font-mono text-[11px] font-bold tabular-nums">
        <span>9:41</span>
        <div className="flex items-end gap-[2px]" aria-hidden="true">
          <span className="h-1 w-[3px] bg-black" />
          <span className="h-1.5 w-[3px] bg-black" />
          <span className="h-2 w-[3px] bg-black" />
          <span className="h-2.5 w-[3px] bg-black/30" />
          <span className="ml-1.5 h-2.5 w-5 border border-black p-[1.5px]">
            <span className="block h-full w-3/4 bg-black" />
          </span>
        </div>
      </div>
      <span className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute inset-x-0 bottom-0 top-11 border-t border-black">
        <Image src={src} alt={alt} fill sizes={sizes} className={screenClassName} />
      </div>
    </div>
  </div>
);
