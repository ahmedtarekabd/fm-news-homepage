import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewArticles from "@/components/new-articles";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="flex gap-8 flex-col lg:flex-row">
          <Hero />
          <NewArticles />
        </div>
      </div>
    </>
  );
}
