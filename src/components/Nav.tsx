import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { Button } from "./ui/button"

export default function Nav() {
    return (
        <>
            <ButtonGroup className="mt-4 mb-4 w-full justify-center">
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-xs">
                    About
                </Button>
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-xs">
                    Experience
                </Button>
                <ButtonGroupSeparator />
                <Button variant="ghost" size="lg" className="w-xs">
                    Projects
                </Button>
                <ButtonGroupSeparator />
            </ButtonGroup>
        </>
    )
}