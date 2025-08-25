import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const typedMessage =
  "  Sr Software Engineer, Red Hat IT. Data-driven leader, crafting process automation and platform integrations.";

export default function Home() {
  const typed = useTyped(typedMessage, 28, 300); // speed(ms/char), startDelay(ms)

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-6">
      <div className="relative bg-dark border border-gold rounded-2xl shadow-lg p-10 max-w-3xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gold mb-6">
          Hi, I'm Wes.
        </h1>

        <p className="text-lg sm:text-xl text-gold/80 mb-8 mx-auto">
          {typed}
          <span className="ml-1 caret">|</span>
        </p>

        <div className="flex justify-center gap-6">
            <Link
              to="/projects"
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition rounded-full"
            >
              Past Projects
            </Link>
          <Link
            to="/contact"
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        {/* Optional glow */}
        <div className="absolute -inset-1 rounded-2xl blur-xl opacity-40 bg-gradient-to-tr from-gold/30 via-gold/10 to-transparent z-[-1]" />
      </div>
    </div>
  );
}

// tiny typing hook
function useTyped(text, speed = 30, startDelay = 0) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timerId;
    const start = () => {
      timerId = setInterval(() => {
        setOut(prev => prev + text.charAt(i));
        i += 1;
        if (i >= text.length) clearInterval(timerId);
      }, speed);
    };
    const delayId = setTimeout(start, startDelay);
    return () => {
      clearInterval(timerId);
      clearTimeout(delayId);
      setOut(""); // reset when unmounting/re-entering
    };
  }, [text, speed, startDelay]);
  return out;
}

