import { getDictionary } from "./dictionaries";

const Home = async ({ params }: { params: Promise<{ lang: "it" | "en" }> }) => {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return (
        <div className="container">
            <h1>{dict.home.welcome_message}</h1>
        </div>
    );
};

export default Home;