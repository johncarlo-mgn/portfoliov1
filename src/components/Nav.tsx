import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { Button } from "./ui/button"
import GlassSurface from './GlassSurface'

export default function Nav() {
    return (
        <>
            <GlassSurface
                width={900}
                height={50}
                borderRadius={8}
                backgroundOpacity={0.1}
                saturation={1}
                borderWidth={0.07}
                brightness={50}
                opacity={0.9}
                blur={11}
                displace={0.5}
                distortionScale={-180}
                redOffset={0}
                greenOffset={10}
                blueOffset={20}
                className="justify-center items-center z-50 px-1 sticky top-8 mt-8 shadow-none!"
            >
                <ButtonGroup className="justify-center items-center">
                    <ButtonGroupSeparator />
                    <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                        About
                    </Button>
                    <ButtonGroupSeparator />
                    <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                        Experience
                    </Button>
                    <ButtonGroupSeparator />
                    <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                        Projects
                    </Button>
                    <ButtonGroupSeparator />
                </ButtonGroup>
            </GlassSurface>

            {/* <ButtonGroup className="justify-center items-center z-50 px-1 sticky top-8 mt-8 backdrop-blur-sm">
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                    About
                </Button>
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                    Experience
                </Button>
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-2xs text-md h-12">
                    Projects
                </Button>
                <ButtonGroupSeparator />
            </ButtonGroup> */}
        </>
    )
}