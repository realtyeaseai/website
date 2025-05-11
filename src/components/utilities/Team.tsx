import Image from "next/image";
import Link from "next/link";

const teamData = [
  {
    img: "/assets/img/team/06.jpg",
    name: "Eduardo D. Howard",
    role: "CEO & Founder",
  },
  {
    img: "/assets/img/team/07.jpg",
    name: "Jeremiah D. Marshall",
    role: "Business Consultant",
  },
  {
    img: "/assets/img/team/08.jpg",
    name: "Jeremy B. Forsberg",
    role: "Senior Manager",
  },
  {
    img: "/assets/img/team/09.jpg",
    name: "Duane V. McCormick",
    role: "Junior Consultant",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white" id="team">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our Professional Team Members
        </h2>
        <p className="text-neutral-400 mb-12">Team Member</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-xl overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-72"
                />

                {/* Social Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-all">
                  {["facebook-f", "twitter", "linkedin-in", "pinterest-p"].map(
                    (icon, i) => (
                      <a key={i} href="#" className="text-white text-lg hover:text-blue-500">
                        <i className={`fab fa-${icon}`} />
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className="py-4">
                <h4 className="font-semibold text-lg">
                  <Link href="/team-details">{member.name}</Link>
                </h4>
                <p className="text-neutral-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
