import Image from "next/image";

export default function Avatar() {
    return (
        <>
            <Image
                priority={true}
                alt="avatar"
                src="/avatar.png"
                width={256}
                height={256}
            />
        </>
    );
}
