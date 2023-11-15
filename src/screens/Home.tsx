import { About } from "../components/About";
import { YoutubeVideo } from "../components/YoutubeVideo";
import { SocialLinks } from "../components/SocialLinks";

export const Home = () => {
    return (
      <main>
        <About/>
        <YoutubeVideo id="yHoI0n2VxMU?si=lVInyQQpCSPiaibo"/>
        <YoutubeVideo id="rxa53OhZLN0?si=sTnEE1774YMXcSTj"/>
        <SocialLinks/>
      </main>
    );
}