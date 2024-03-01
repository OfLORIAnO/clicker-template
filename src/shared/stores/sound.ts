import { musicPath, soundOfClickPath } from '@settings/index';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SoundState {
    soundOfClick: HTMLAudioElement;
    soundVolume: number;
    soundCurrentTime: number;
    playSoundOfClick: () => void;
    setSoundVolume: (value: number) => void;

    music: HTMLAudioElement;
    musicVolume: number;
    setMusicVolume: (value: number) => void;

    turnOnMusic: () => void;
}

const createSoundSlice: StateCreator<
    SoundState,
    [['zustand/devtools', never]],
    [],
    SoundState
> = (set, get) => ({
    soundOfClick: new Audio(soundOfClickPath),
    soundCurrentTime: 0,
    soundVolume: 100,
    playSoundOfClick: () => {
        const soundOfClick = get().soundOfClick;

        set({
            soundCurrentTime: soundOfClick.currentTime,
        });

        soundOfClick.currentTime = 0;
        soundOfClick.volume = get().soundVolume / 100;
        soundOfClick.play();
    },
    setSoundVolume: (value: number) => {
        set({ soundVolume: value }, false, 'setSoundVolume');
    },

    music: new Audio(musicPath),

    turnOnMusic: () => {
        const music = get().music;

        music.volume = get().musicVolume / 100;
        music.loop = true;
        music.play();
    },

    musicVolume: 0,
    setMusicVolume: (value: number) => {
        set({ musicVolume: value }, false, 'setMusicVolume');
        const music = get().music;
        music.volume = get().musicVolume / 100;
    },
});
export const useSoundController = create<SoundState>()(
    devtools((...args) => ({ ...createSoundSlice(...args) }), {
        name: 'Sound',
    }),
);
