import Image from "next/image";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
const FooterH2: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return <h2 className={`font-bold uppercase ${className}`}>{children}</h2>;
};

const FooterSocial: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
}) => {
    return (
        <div className="flex p-3 justify-center items-center rounded-[50%] bg-[rgba(62,62,62,1)]">
            {children}
        </div>
    );
};

const footerSocialDta = [
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "#",
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        href: "#",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        href: "#",
    },
];

const Footer = () => {
    return (
        <footer className="bg-[rgba(40,40,40,1)] ">
            <div className="max-w-7xl mx-auto pt-12 pb-6 px-4 sm:px-6 lg:pt-16 lg:px-8">
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-white pb-14">
                    {/* company logo */}
                    <div className="flex md:mb-0 mb-6 gap-4 items-center w-full md:flex-[2_1_0%]">
                        <Image src="/logo.png" alt="Logo" width={60} height={50} />
                        <p className="text-2xl font-bold">GameShop</p>
                    </div>
                    <div className="flex gap-6 justify-between w-full md:flex-[3_1_0%]">
                        {/* peta situs */}
                        <div className="sm:flex gap-4 flex-col hidden">
                            <FooterH2>peta situs</FooterH2>
                            <ul className="flex gap-4 flex-col ">
                                <li>
                                    <a href="#">Beranda</a>
                                </li>
                                {["Beranda", "Semua Game", "Masuk", "Daftar"].map(
                                    (item) => (
                                        <li key={item}>
                                            <a href="#">{item}</a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        {/* topup lainnya */}
                        <div className="sm:flex gap-4 flex-col hidden">
                            <FooterH2>topup lainnya</FooterH2>
                            <ul className="flex gap-4 flex-col ">
                                <li>
                                    <a href="#">Beranda</a>
                                </li>
                                {[
                                    "Mobile Legends",
                                    "Free Fire",
                                    "Pubg Mobile",
                                    "Undawn",
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* socials */}
                        <div className="flex flex-row sm:flex-col justify-between gap-10 sm:gap-3">
                            <div>
                                <FooterH2 className="mb-3">ikuti kami</FooterH2>
                                <div className="flex gap-3 mb-8">
                                    {footerSocialDta.map((item) => (
                                        <FooterSocial key={item.name}>
                                            <a href={item.href}>
                                                <item.icon className="w-6 h-6" />
                                            </a>
                                        </FooterSocial>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <FooterH2 className="">pertanyaan bisnis</FooterH2>
                                <p>contact@gameshop.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-between text-sm pt-4">
                    <p>© PT BERMAIN BERSAMA INDONESIA, 2023</p>
                    <a className="sm:block hidden" href="#">
                        Privacy Policy
                    </a>
                    <a className="sm:block hidden" href="#">
                        Terms of Service
                    </a>
                    <a className="sm:block hidden" href="#">
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
