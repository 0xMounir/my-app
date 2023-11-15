import { FaGithub, FaDiscord } from "react-icons/fa6";

export const Ressources = () => {
    return (
        <main>
            <h3 className="font-bold text-3xl mb-4">Ressources de la chaine</h3>

            <ul>
                <li className="flex items-center"><FaGithub className="mr-2"/><a className="hover:underline" href="https://github.com/">Github</a></li>
                <li className="flex items-center"><FaDiscord className="mr-2"/><a className="hover:underline" href="https://discord.gg/">Discord</a></li>
            </ul>
        </main>
    );
}