import SpotlightCard from "@/components/SpotlightCard"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router'



export default function Projects() {

    return (
        <>
            <div className="flex flex-col justify-start pt-16 h-[calc(100dvh-48px)] items-center font-mono cursor-default">

                <Marker variant="separator">
                    <MarkerContent className="text-lg font-semibold">Projects</MarkerContent>
                </Marker>

                <div className=" w-full flex flex-row-reverse">
                    <Button size={"icon-sm"} variant="outline" className={""}>
                        <ArrowUpRight color="gray" />
                    </Button>
                </div>

                <div className="flex py-8 gap-4 h-full w-full items-start">
                    <SpotlightCard className="flex flex-col p-2 gap-4 w-full h-max rounded-sm shadow-xs border-accent bg-white text-black" spotlightColor="rgba(0, 0, 0, 0.05)">
                        <div className="grayscale w-full h-50 shadow-xs border-accent rounded-sm bg-[url('\gesturespeak_project_image.png')] bg-contain bg-no-repeat bg-center" />
                        <div className="flex flex-col gap-2 p-4">
                            <p className="text-lg font-semibold">GestureSpeak</p>
                            <p className="text-sm text-pretty">AI-Powered Filipino Sign Language Learning System</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard className="flex flex-col p-2 gap-4 w-full h-max rounded-sm shadow-xs border-accent bg-white text-black" spotlightColor="rgba(0, 0, 0, 0.05)">
                        <div className="grayscale w-full h-50 shadow-xs border-accent rounded-sm bg-[url('\gesturespeak_project_image.png')] bg-contain bg-no-repeat bg-center" />
                        <div className="flex flex-col gap-2 p-4">
                            <p className="text-lg font-semibold">Vaxme</p>
                            <p className="text-sm text-pretty">RHU-Barangay Centralized Vaccine Management System</p>
                        </div>
                    </SpotlightCard>
                </div>

                {/* footer */}

                <div className="flex gap-4 mb-2 w-full justify-center items-center text-sm text-black border-t pt-2">
                    <Button variant="link">
                        <img className="size-4" src="https://www.svgrepo.com/show/473621/gmail.svg"></img>
                        <NavLink to='/email'>Email</NavLink>
                    </Button>
                    <Separator orientation="vertical"></Separator>
                    <Button variant="link">
                        <img className="size-6" src="https://www.svgrepo.com/show/500918/linkedin.svg"></img>
                        <NavLink to='https://www.linkedin.com/in/john-carlo-magana-3b7b40368/'>LinkedIn</NavLink>
                    </Button>
                    <Separator orientation="vertical"></Separator>
                    <Button variant="link">
                        <img className="size-4" src="https://www.svgrepo.com/show/512317/github-142.svg"></img>
                        <NavLink className={"mt-1"} to='https://github.com/johncarlo-mgn'>GitHub</NavLink>
                    </Button>
                </div>

            </div>
        </>
    )

}