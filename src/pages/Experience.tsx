import { Marker, MarkerContent } from "@/components/ui/marker"
import { Separator } from "@/components/ui/separator"

export default function Experience() {

    return (
        <>
            <div className="flex flex-col justify-start py-8 h-[calc(100dvh-80px)] items-center text-xs">
                <Marker variant="separator">
                    <MarkerContent className="text-lg font-semibold">Experience</MarkerContent>
                </Marker>
                <div className="bg-muted p-1 border rounded-xs mt-4"></div>
                <div className="flex h-full">
                    <Separator orientation="vertical" />
                </div>
                <div className="flex flex-col bg-muted py-2 px-4 m-4 rounded-md font-mono">
                    <p className="font-semibold">Internship - 2025</p>
                    <p className="">HeroApps Software Development Services</p>
                    <p className="italic">Web Developer</p>
                </div>
                <div className="flex h-full">
                    <Separator orientation="vertical" />
                </div>
                <div className="p-2 m-4 border rounded-md font-mono">
                    <p>Finding my dream job</p>
                </div>
            </div>

        </>
    )

}