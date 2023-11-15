import { FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa6";

export const SocialLinks = () => {
    return (
        <div>
            <section className="mt-5">
                <h3 className="text-3xl font-bold">Mes réseaux sociaux</h3>

                <ul className="mt-5">
                    <li className="flex items-center"><FaTwitter className="mr-2"/> <a className="hover:text-[#CF3735]" href="https://twitter.com/0xmounir">Twitter</a></li>
                    <li className="flex items-center"><FaGlobe className="mr-2"/> <a className="hover:text-[#CF3735]" href="https://mounirdev.com/">Site web</a></li>
                    <li className="flex items-center"><FaYoutube className="mr-2"/> <a className="hover:text-[#CF3735]" href="https://www.youtube.com/@0xmounir">Youtube</a></li>
                </ul>
            </section>
        </div>
    );
}