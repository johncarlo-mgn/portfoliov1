import RotatingText from "@/components/RotatingText";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function About() {
    return (
        <>
            <div className="flex flex-col justify-center h-[calc(100dvh-80px)] items-center">
                <div className="flex gap-8">
                    <Avatar className="w-40 h-40">
                        <AvatarImage src="src\assets\profilee.jpg" className="rounded-sm" />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <span className="font-mono font-bold text-3xl">John Carlo</span>
                        <span className="px-2 font-mono text-md">
                            Computer Science Graduate
                        </span>
                        <span className="px-2 font-mono text-md">
                            Aspiring Software Developer & Engineer Roles
                        </span>
                        <span className="bg-muted m-2 p-2 border rounded-lg overflow-x-auto font-mono text-md">
                            “Those who don't build must burn. It's as old as history and juvenile delinquents.”
                            ― Ray Bradbury
                        </span>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 w-full pt-16">
                    <h1 className="font-mono font-bold text-2xl">I'm passionate about</h1>
                    <RotatingText
                        texts={['Coding', 'Software', 'Development', 'Building', 'Learning']}
                        mainClassName="py-0 px-2 bg-transparent text-black text-2xl font-bold font-mono overflow-hidden justify-center items-center rounded-xs border border-black dark:border-gray-700"
                        staggerFrom="first"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden "
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        splitBy="characters"
                        auto
                        loop
                    />
                </div>
                <div className="p-8">
                    // github contributions
                </div>
            </div>

        </>

    )
}