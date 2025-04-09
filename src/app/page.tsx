import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mt-12">
      <div className="flex flex-col justify-center align-items-center">
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
      </div>
      <p className="mt-4 text-lg">
        Full Stack Web Developer | Passionate about building scalable and
        efficient web applications
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-base">
          Hi, I@#39;m Bryan! I specialize in creating modern web applications
          using the latest technologies. I enjoy solving complex problems and
          learning new tools to improve my craft.
        </p>
      </div>
      <div className="mt-8"></div>
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <ul className="mt-4 space-y-2">
        <li>Java</li>
        <li>Python</li>
        <li>React</li>
        <li>JavaScript (JS)</li>
        <li>TypeScript (TS)</li>
        <li>MongoDB</li>
        <li>Next.js</li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="https://github.com/nguyenhbryan/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Project 1
            </a>{" "}
            - A description of your project.
          </li>
          <li>
            <a
              href="https://github.com/nguyenhbryan/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Project 2
            </a>{" "}
            - A description of your project.
          </li>
          <li>
            <a
              href="https://github.com/nguyenhbryan/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Project 3
            </a>{" "}
            - A description of your project.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">
          Email:{" "}
          <a
            href="mailto:nguyenhbryan@example.com"
            className="text-blue-500 hover:underline"
          >
            nguyenhbryan@example.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/nguyenhbryan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/nguyenhbryan
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/nguyenhbryan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/nguyenhbryan
          </a>
        </p>
      </div>
    </div>
  );
}
