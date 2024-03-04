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

    initSounds: () => void;

    getStateDataForYandex: () => [number, number];
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
        const setDataYsdk = useYandexStore.getState().setDataYsdk;

        set({ soundVolume: value });

        await setDataYsdk({ soundVolume: value });

        const soundOfClick = get().soundOfClick;
        soundOfClick.volume = get().soundVolume / 100;
    },

    turnOnMusic: () => {
        const music = get().music;

        music.loop = true;
        music.play();
    },
    setMusicVolume: async (value: number) => {
        const setDataYsdk = useYandexStore.getState().setDataYsdk;

        set({ musicVolume: value });

        await setDataYsdk({ musicVolume: value });

        const music = get().music;
        music.volume = get().musicVolume / 100;
    },

    initSounds: () => {
        get().soundOfClick.volume = get().soundVolume / 100;
        get().music.volume = get().musicVolume / 100;

        get().turnOnMusic();
    },

    getStateDataForYandex: () => {
        return [get().soundVolume, get().musicVolume];
    },
});
export const useSoundController = create<SoundState>()(
    devtools((...args) => ({ ...createSoundSlice(...args) }), {
        name: 'Sound',
    }),
);
