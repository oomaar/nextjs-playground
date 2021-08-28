import Link from "next/link";
import {
    Nav,
    Logo,
    Button,
} from "./styledNavbar";

export const Navbar = () => {
    return (
        <Nav>
            <Link href="/">
                <Logo>NoteApp</Logo>
            </Link>
            <Link href="/new">
                <Button href="#">Create Note</Button>
            </Link>
        </Nav>
    );
};