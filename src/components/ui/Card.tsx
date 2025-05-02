// components/Card.tsx
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  item: {
    id?: string | number;
    link: string;
    tag: string;
    title: string;
  };
};

export default function Card({ item }: CardProps) {
  return (
    <Link href={item.link}      
        className="block w-full max-w-[300px] h-[270px] rounded-2xl border border-[#00000035] hover:border-black 
                   transition-shadow duration-300 cursor-pointer hover:shadow-[6px_6px_2px_2px_#333333] 
                   dark:hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)]"
        aria-label={item.title}
      >
        <article className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-2xl shadow-xl dark:bg-[#ffffff10]">
          <div className="flex-[0.7] grid place-items-center w-full h-full">
            <span className="h-[80%] w-[40%] flex items-center justify-center rounded-2xl dark:bg-transparent">
              <Image
                src={item.tag}
                width={100}
                height={100}
                alt={item.title}
                className="h-auto w-full md:w-[50%] border filter dark:invert dark:brightness-100"
              />
            </span>
          </div>
          <div className="flex-[0.3] w-full h-full grid place-items-center">
            <p className="text-center text-xl w-full h-full dark:text-white">
              {item.title}
            </p>
          </div>
        </article>
    </Link>
  );
}
