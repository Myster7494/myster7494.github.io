import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";

import {FaGithub, FaInstagram, FaFacebook, FaDiscord, FaMailBulk, FaEnvelope} from "react-icons/fa";

import {items, tagline} from "../data/data";

export default function Home() {
    return (
        <>
            <div style={{padding: "15px"}}
                 className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
                <section className="flex flex-col items-center gap-5 justify-center my-10">
                    <Avatar/>

                    <a className="text-3xl font-semibold">Myster 神祕陌生人</a>
                    <a style={{lineHeight: "0.5rem"}}>邱顯智</a>

                    <div className="text-amber-300 text-xl flex justify-between gap-5">
                        {tagline.map((item, index) => (
                            <div
                                className="text-center font-thin"
                                key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <a>現為桃園市立桃園高級中等學校二年級學生，並擔任學校資訊社 113 學年度教學。</a>

                <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
                    <Card
                        title={items.discord.title}
                        icon={<FaDiscord/>}
                        url={items.discord.url}
                    />
                    <Card
                        title={items.github.title}
                        icon={<FaGithub/>}
                        url={items.github.url}
                    />
                    <Card
                        title={items.instagram.title}
                        icon={<FaInstagram/>}
                        url={items.instagram.url}
                    />
                    <Card
                        title={items.facebook.title}
                        icon={<FaFacebook/>}
                        url={items.facebook.url}
                    />

                    <Card
                        title={items.email.title}
                        icon={<FaEnvelope/>}
                        url={items.email.url}
                    />
                </div>
            </div>
        </>
    );
}
