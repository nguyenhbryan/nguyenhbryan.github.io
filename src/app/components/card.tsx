import Link from "next/link";
import Image from "next/image";

export default function Card(props: {image: string, title: string, description: string, link: string, techStack: string[]}) {
    const {image, title, description, link, techStack} = props;
    const imageSrc = image ? image : "/file.svg"; // Fallback to a default image if none is provided
    const imageAlt = title ? title : "Default Image"; // Fallback to a default alt text if none is provided
    const linkTarget = link ? link : "#"; // Fallback to a default link if none is provided

    return (
        <>  
            <div>
            <Link href={`https://github.com/nguyenhbryan/${linkTarget}`}>
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-md">
                    <div className="text-blue-500 hover:text-blue-300 transition-colors duration-200 font-semibold">
                        {title}
                    </div>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={300}
                        height={300}
                        className="rounded-lg mt-2"
                    />
                    <p className="mt-2 text-sm text-white text-center">
                        {description}
                    </p>
                    <div className="mt-4 flex gap-2 justify-center">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                </Link>
            </div>
            
        </>
    );
}