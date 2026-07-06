import { useEffect, useState } from 'react';
import { BootScreen } from './components/Boot/BootScreen';
import { Desktop } from './components/Desktop/Desktop';

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setIsBooting(false), 1800);
    return () => window.clearTimeout(bootTimer);
  }, []);

  return isBooting ? (
    <BootScreen onStart={() => setIsBooting(false)} />
  ) : (
    <Desktop />
  );
}

export default App;