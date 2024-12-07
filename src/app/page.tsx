import Ripple from "@/components/ui/ripple";
import TtsDemo from "./components/tts-demo";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Ripple />
      </div>
      <Header />
      <main className="flex flex-col gap-8">
        <TtsDemo />
      </main>
      <Footer />
    </div>
  );
}
