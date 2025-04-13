import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ pageName = "About Company", pageTitle }) => {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <Image
        src="/assets/img/breadcrumb.jpg"
        alt="Breadcrumb"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-0"
      />

      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {pageTitle || pageName}
        </h1>

        <ul className="flex justify-center items-center gap-2 text-neutral-300 text-sm">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="text-white">{pageName}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
