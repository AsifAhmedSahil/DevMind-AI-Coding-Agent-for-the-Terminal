import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_DURATION, type ToastOptions } from "./types";

export type ToastContextValue = {
  show: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const value = useContext(ToastContext);
  if (!value) {
    throw new Error("use toast must be used within a ToastProvider");
  }

  return value;
}

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [currentToast, setCurrentToast] = useState<ToastOptions | null>(null);
  const timeoutHandleRef = useRef<NodeJS.Timeout | null>(null);

  const clearCurrentTimeout = useCallback(() => {
    if (timeoutHandleRef.current) {
      clearTimeout(timeoutHandleRef.current);
      timeoutHandleRef.current = null;
    }
  }, []);

  const show = useCallback((options: ToastOptions) => {
    const duration = options.duration ?? DEFAULT_DURATION;

    clearCurrentTimeout();

    setCurrentToast({
      variant: options.variant ?? "info",
      ...options,
      duration,
    });

    timeoutHandleRef.current = setTimeout(() => {
      setCurrentToast(null);
    }, duration).unref();
  }, [clearCurrentTimeout]);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* <Toast currentToast={currentToast} /> */}
    </ToastContext.Provider>
  );
};
