import Image from "next/image";

export default function About() {
    return(<div className="flex flex-col">
        <h1 className="text-4xl font-bold">Bryan Nguyen | Software Engineer</h1>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://github.com/nguyenhbryan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/github-mark-white.svg"
              alt="Email"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://linkedin.com/in/nguyenhbryan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/linkedin.png"
              alt="Email"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>

        <p className="mt-4 text-lg">
          Full Stack Web Developer | Passionate about building scalable and
          efficient web applications
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-base">
            Hi, I&#39;m Bryan! I specialize in creating modern web applications
            using the latest technologies. I enjoy solving complex problems and
            learning new tools to improve my craft.
          </p>
        </div>
      </div>);
}