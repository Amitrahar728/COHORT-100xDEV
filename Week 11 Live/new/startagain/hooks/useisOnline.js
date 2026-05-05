import * as React from "react";

// Check if window is available
const maybeWindow = typeof window === "undefined" ? null : window;

export default function useIsOnline() {
  const [isOnline, setIsOnline] = React.useState(
    // Read onLine value from navigator if available, otherwise fallback to true
    maybeWindow?.navigator.onLine ?? true,
  );

  useEffect(() => {
    // Add event listeners on mount
    maybeWindow?.addEventListener("online", () => setIsOnline(true));
    maybeWindow?.addEventListener("offline", () => setIsOnline(false));

    // Remove event listeners on unmount
    return () => {
      maybeWindow?.removeEventListener("online", () => setIsOnline(true));
      maybeWindow?.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  // Return the online status
  return isOnline;
}