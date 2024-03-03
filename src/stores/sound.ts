import { musicPath, soundOfClickPath } from '@settings/index';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SoundState {
    soundOfClick: HTMLAudioElement;
    soundVolume: number;
    soundCurrentTime: number;
    playSoundOfClick: () => Promise<void>;
    setSoundVolume: (value: number) => void;

    music: HTMLAudioElement;
    musicVolume: number;
    setMusicVolume: (value: number) => void;

    turnOnMusic: () => Promise<void>;

    initSounds: () => void;
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
    playSoundOfClick: async () => {
        const soundOfClick = get().soundOfClick;

        if (!soundOfClick) {
            return;
        }

        soundOfClick.currentTime = 0;
        soundOfClick.play();
    },
    setSoundVolume: (value: number) => {
        // TODO сохранять данные
        const soundOfClick = get().soundOfClick;
        if (soundOfClick) {
            soundOfClick.volume = get().soundVolume / 100;
        }

        set({ soundVolume: value });
    },

    music: new Audio(musicPath),

    turnOnMusic: async () => {
        const music = get().music;

        music.loop = true;
        music.play();
    },

    musicVolume: 5,
    setMusicVolume: (value: number) => {
        // TODO сохранять данные
        set({ musicVolume: value });
        const music = get().music;
        if (music) {
            music.volume = get().musicVolume / 100;
        }
    },

    initSounds: () => {
        const music = get().music;
        const soundOfClick = get().soundOfClick;

        soundOfClick.volume = get().soundVolume / 100;
        music.volume = get().musicVolume / 100;

        get().turnOnMusic();
    },
});
export const useSoundController = create<SoundState>()(
    devtools((...args) => ({ ...createSoundSlice(...args) }), {
        name: 'Sound',
    }),
);
