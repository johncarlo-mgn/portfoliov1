import RotatingText from "@/components/RotatingText";
import { GitHubCalendar } from 'react-github-calendar';


export default function About() {
    return (
        <>
            <div className="flex flex-col justify-evenly h-[calc(100dvh-80px)] items-center">
                <div className="flex gap-8 h-auto justify-center items-center">
                    {/* profile */}
                    <div className="size-40 bg-[url('/profilepixel.jpg')] bg-cover bg-center bg-no-repeat" />
                    {/* profile end */}
                    <div className="flex flex-col gap-1 flex-3">
                        <span className="font-mono font-bold text-3xl">John Carlo D. Magana</span>
                        <span className="px-2 font-mono text-md">
                            Computer Science Graduate
                        </span>
                        <span className="px-2 font-mono text-md">
                            Aspiring Software Developer & Engineer Roles
                        </span>
                        <span className=" m-2 px-4 py-2 border-2 border-accent rounded-sm overflow-x-auto font-mono text-sm">
                            “Those who don't build must burn. It's as old as history and juvenile delinquents.”
                            ― Ray Bradbury
                        </span>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 w-full">
                    <h1 className="font-mono font-bold text-xl">I'm passionate about</h1>
                    <RotatingText
                        texts={['Coding', 'Software', 'Development', 'Building', 'Learning']}
                        mainClassName="py-0 px-2 bg-transparent text-black text-xl font-bold font-mono overflow-hidden justify-center items-center rounded-xs border border-black dark:border-gray-700"
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
                <div className="text-sm">
                    <p className="pb-1">GitHub contributions</p>
                    <GitHubCalendar
                        username="johncarlo-mgn"
                        blockRadius={0}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        showColorLegend={false}
                        showTotalCount={false}
                        showWeekdayLabels={false}
                        showMonthLabels={false}
                        tooltips={{
                            activity: {
                                text: ({ count, date }) => (
                                    `${count} on ${date}`
                                ),
                                placement: "right-end",
                            },
                        }}
                        colorScheme="light"
                        theme={{
                            light: ['white', 'black'],
                            dark: ['#333', 'rgb(214, 16, 174)'],
                        }}
                    />
                </div>
            </div>

        </>

    )
}