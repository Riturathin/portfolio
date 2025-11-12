import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


export default function HomeLink() {
    return (
        <>
        {/* <ThemeToggle /> */}
        <Link to="/" className="text-blue-400 hover:underline">
            <img
                src={`${import.meta.env.BASE_URL}logos/lost.png`}
                alt="Lost? Let’s teleport home!"
                className="w-16 h-16 mb-4 rounded-full bg-white/10 p-2 object-contain"
            />
        </Link>
        </>
    );
}