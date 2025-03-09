import Head from "next/head";
import {minecraft} from "../data/data";

export default function Minecraft() {
    return <Head>
        <title>Minecraft Online</title>
        <meta property="og:type" content="object"/>
        <meta property="og:title" content={minecraft.title}/>
        <meta property="twitter:title" content={minecraft.title}/>
        <meta property="og:description"
              content={minecraft.description}/>
        <meta property="twitter:description"
              content={minecraft.description}/>
        <meta name="og:image" content={minecraft.image}/>
        <meta name="twitter:image" content={minecraft.image}/>
        <meta property="og:image:alt"
              content={minecraft.description}/>
        <meta property="og:image:width" content="3840"/>
        <meta property="og:image:height" content="2160"/>
        <meta property="og:url" content="https://myster7494.github.io/minecraft"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta http-equiv="refresh" content="0;url=https://youtu.be/aCgP8BFjrw4"/>
    </Head>
}