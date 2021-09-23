import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="container w-full mx-auto pt-24">
            <section id="hero" className="w-full ">
                <div className="grid place-content-center md:flex md:flex-col md:justify-center">
                    <h3 className="text-crusta text-base md:text-xl lg:text-xl">TAGLINE</h3>
                    <h1 className="text-white w-64 md:w-3/4 lg:w-8/12 text-3xl md:text-6xl lg:text-7xl font-bold">
                        Medium Length Display Headline
                    </h1>
                </div>
                <div className="grid grid-cols-2 gap-3 md:block lg:block space-x-2 p-5">
                    <button className="text-white bg-crusta h-auto p-3 font-bold rounded shadow-sm">
                        <Link href="https://discord.com/api/oauth2/authorize?client_id=886307663917502545&permissions=3147776&scope=bot">
                            Invite the Bot
                        </Link>
                    </button>
                    <button className="text-crusta bg-parchment h-auto p-3 font-bold rounded shadow-sm">
                        <Link href="/premium">Get Premium</Link>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default HomePage;