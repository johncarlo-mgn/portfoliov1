import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { Button } from "./ui/button"

export default function Nav() {
    return (
        <>
            <ButtonGroup className="justify-center items-center z-50 px-1 sticky top-8 mt-8 backdrop-blur-sm">
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
        </>
    )
}