import WelcomeActions from "./components/WelcomeActions";
import WelcomeBackground from "./components/WelcomeBackground";
import WelcomeFooter from "./components/WelcomeFooter";
import WelcomeHeader from "./components/WelcomeHeader";

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      <WelcomeBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-md
          flex-col
          justify-between
          px-8
        "
      >
        <WelcomeHeader />

        <WelcomeActions />

        <WelcomeFooter />
      </div>

    </main>
  );
}