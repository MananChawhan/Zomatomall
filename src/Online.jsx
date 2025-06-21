import { useEffect, useState } from "react";
import NavbarForUseEffect from './NavbarForUseEffect';
import { BsWifi, BsWifiOff } from "react-icons/bs";

const Online = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-yellow-300 px-4">
        <div className="bg-yellow-400 border-2 border-black rounded-3xl p-6 w-full max-w-md shadow-lg text-center space-y-4">
          <h1 className="text-3xl font-bold text-black mb-2">📶 Internet Status</h1>

          <div className="text-2xl font-semibold flex justify-center items-center gap-3 text-black">
            {online ? (
              <>
                <BsWifi className="text-green-600 text-4xl animate-pulse" />
                <span>Someone is Online ✅</span>
              </>
            ) : (
              <>
                <BsWifiOff className="text-red-600 text-4xl animate-pulse" />
                <span>Everyone is Offline ❌</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Online;
