import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Learner, Analyzer, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hello! I'm Alireza Saljoghi, a dedicated IT-security student with a strong passion for building secure, resilient systems and staying ahead of cyber threats in an ever-evolving digital world.
              </p>
              <p className="text-white">
              With a solid foundation in networking, virtualization, and system administration, I’m currently sharpening my skills in areas like identity and access management (IAM), group policy hardening, and real-world security auditing. Whether I’m configuring firewalls, implementing AppLocker rules, or simulating attacks in virtual lab environments, I’m always focused on learning through hands-on experience.

Right now, I'm actively applying for internships, eager to contribute to a professional IT security team while continuing to grow as a specialist. My goal is to work with innovative companies where I can solve real problems, help defend against threats, and make a meaningful impact.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  I believe IT security is not just about tools—it's about mindset, discipline, and staying curious. Every system is a puzzle, and I love finding the smartest way to protect it
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Alireza Saljoghi
                    </cite>
                    <div className="flex items-center gap-2">
                      
                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
