import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SoundState {
    soundVolume: number;
    setSoundVolume: (value: number) => void;
    musicVolume: number;
    setMusicVolume: (value: number) => void;
}

const createSoundSlice: StateCreator<
    SoundState,
    [['zustand/devtools', never]],
    [],
    SoundState
> = (set) => ({
    soundVolume: 37.5,
    setSoundVolume: (value: number) => {
        set({ soundVolume: value }, false, 'setSoundVolume');
    },
    musicVolume: 37.5,
    setMusicVolume: (value: number) => {
        set({ musicVolume: value }, false, 'setMusicVolume');
    },
});
export const useSoundController = create<SoundState>()(
    devtools((...args) => ({ ...createSoundSlice(...args) }), {
        name: 'Sound',
    }),
);
