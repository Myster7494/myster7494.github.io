import {FaGithub} from "react-icons/fa";
import {config} from "../../data/data";

export default function Footer() {
    return (
        <div className="py-2 text-center bg-zinc-800">
            <a>Myster 神祕陌生人 2025</a>
            <a href={config.url}>
                <div className="flex justify-center items-center gap-2 py-2">
                    <div>{config.footer}</div>
                    <div>
                        <FaGithub/>
                    </div>
                </div>
            </a>
        </div>
    );
}
