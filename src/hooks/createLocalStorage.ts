import { createSignal, type Setter, type Signal } from "solid-js";

const createLocalStorage = <T>(key: string, initialValue: T): Signal<T> => {
  const getLocalValue = (): T => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? "") as T;
    } catch {
      return initialValue;
    }
  };

  const [signalValue, setSignalValue] = createSignal<T>(getLocalValue());

  // biome-ignore lint/complexity/noBannedTypes: 'Function' used as type for solidjs 'Setter<T>'
  const setValue = (newValue: ((prev: T) => T) | Exclude<T, Function>) => {
    const resolvedValue: T =
      newValue instanceof Function ? newValue(signalValue()) : newValue;
    localStorage.setItem(key, JSON.stringify(resolvedValue));
    setSignalValue(newValue);
  };

  return [signalValue, setValue as Setter<T>];
};

export default createLocalStorage;
