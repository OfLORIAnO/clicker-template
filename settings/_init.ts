import { colors } from './index';

function InitColors() {
    for (const [key, color] of Object.entries(colors)) {
        document.documentElement.style.setProperty(`--${key}`, `${color}`);
    }
}

async function InitSettings() {
    InitColors();
}
export default InitSettings;
