import { Marker, MarkerContent } from "@/components/ui/marker"


export default function Philosophy() {

    return (
        <>
            <div className="flex flex-col justify-start py-16 h-[calc(100dvh-48px)] items-center font-mono">
                {/* <Marker variant="separator">
                    <MarkerContent className="text-lg font-semibold">My Phillosopy</MarkerContent>
                </Marker> */}
                <div className=" flex w-full h-full items-center justify-center">
                    <div className="flex flex-col items-center w-full m-2 p-4 border border-accent rounded-sm overflow-x-auto font-mono text-sm">
                        <div className="flex flex-col">
                            <span >
                                “We can always twist our destiny.”
                            </span>
                            <span className="px-2">
                                ― John Carlo Magana
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}