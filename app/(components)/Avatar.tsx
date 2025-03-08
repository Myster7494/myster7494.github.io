import Image from "next/image";

export default function Avatar() {
    return (
        <>
            <div className="avatar md:hover:scale-[102%] transition-all duration-300">
                <div className="w-32 mask mask-squircle">
                    <Image
                        priority={true}
                        alt="avatar"
                        src="/avatar.png"
                        width={256}
                        height={256}
                    />
                </div>
            </div>
        </>
    );
}
