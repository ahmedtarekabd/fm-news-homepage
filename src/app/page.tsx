import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewArticles from "@/components/new-articles";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
          <div className="lg:col-span-8">
            <Hero />
          </div>
          <div className="lg:col-span-4">
            <NewArticles />
          </div>
        </div>
        
      </div>
    </>
  );
}
