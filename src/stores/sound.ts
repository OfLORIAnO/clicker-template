import { musicPath, soundOfClickPath } from '@settings/index';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useYandexStore } from '.';

interface SoundState {
    soundOfClick: HTMLAudioElement;
    music: HTMLAudioElement;

    soundVolume: number;
    musicVolume: number;

    playSoundOfClick: () => void;
    setSoundVolume: (value: number) => Promise<void>;

    setMusicVolume: (value: number) => Promise<void>;
    turnOnMusic: () => void;

    startSounds: () => void;

    initSoundData: (soundVolume: number, musicVolume: number) => void;

    getStateDataForYsdk: () => {
        soundVolume: number;
        musicVolume: number;
    };

    changeDataYsdk: () => Promise<void>;
}

const createSoundSlice: StateCreator<
    SoundState,
    [['zustand/devtools', never]],
    [],
    SoundState
> = (set, get) => ({
    soundOfClick: new Audio(soundOfClickPath),
    music: new Audio(musicPath),

    musicVolume: 5,
    soundVolume: 100,

    playSoundOfClick: () => {
        const soundOfClick = get().soundOfClick;

        soundOfClick.currentTime = 0;
        soundOfClick.play();
    },
    setSoundVolume: async (value: number) => {
        set({ soundVolume: value });

        const soundOfClick = get().soundOfClick;
        soundOfClick.volume = get().soundVolume / 100;

        await get().changeDataYsdk();
    },

    turnOnMusic: () => {
        const music = get().music;

        music.loop = true;
        music.play();
    },
    setMusicVolume: async (value: number) => {
        set({ musicVolume: value });

        const music = get().music;
        music.volume = get().musicVolume / 100;

        await get().changeDataYsdk();
    },

    startSounds: () => {
        get().soundOfClick.volume = get().soundVolume / 100;
        get().music.volume = get().musicVolume / 100;

        get().turnOnMusic();
    },
    initSoundData: (soundVolume: number, musicVolume: number) => {
        set({
            soundVolume,
            musicVolume,
        });
    },

    getStateDataForYsdk: () => {
        return {
            soundVolume: get().soundVolume,
            musicVolume: get().musicVolume,
        };
    },

    changeDataYsdk: async () => {
        await useYandexStore.getState().setDataYsdk();
    },
});
export const useSoundController = create<SoundState>()(
    devtools((...args) => ({ ...createSoundSlice(...args) }), {
        name: 'Sound',
    }),
);
