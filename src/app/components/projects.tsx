import Link from "next/link";
import Card from "./card"; 

export default function Projects() {
    return(<div className="mt-8 mx-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <div className=" flex overflow-auto gap-4">
              <Card 
              image="/coincraze.png" 
              title="Coin Craze (Full Stack Minigame Website)" 
              description="A fun and interactive web app featuring a collection of minigames. Built with a modern tech stack, it allows users to play games, track scores, and compete with friends. The app is designed for seamless performance and an engaging user experience." 
              link="goodfinancialadvice" 
              techStack={["NextJS", "Javascript", "Node.js", "MongoDB"]}
              />
              <Card 
              image="" 
              title="Project 2" 
              description="33333" 
              link="" 
              techStack={["Next.js", "Node.js"]}
              />
              <Card 
              image="" 
              title="Project 3" 
              description="33333" 
              link="" 
              techStack={["JavaScript", "CSS"]}
              />
            </div>{" "}
          </li>

        </ul>
      </div>);
}