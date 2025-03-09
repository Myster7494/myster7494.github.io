import {config} from "../data/data";

export default function Head() {
    return (
        <>
            <title>{config.title}</title>
            <meta name="description" content="Made using Next.js 13"/>
            <link rel="icon" href="/favicon.ico"/>
        </>
    );
}
