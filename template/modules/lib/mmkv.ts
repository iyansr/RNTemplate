import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

type Value = boolean | string | number | Uint8Array;

const mmkv = {
  setItem: (name: string, value: Value) => {
    return storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return storage.delete(name);
  },
};

export default mmkv;
