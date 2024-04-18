import { createI18n } from 'vue-i18n';
import en from './locales/en.json'
import ru from './locales/ru.json'

//проверить, что скачивается только один файл за раз

/*async function loadLocaleMessages() {
    const messages = {};
    const locale = 'en';
    const context = import.meta.glob('./locales/!*.json');
    const pathToFile = `./locales/${locale}.json`;

    if (context[pathToFile]) {
        const module = await context[pathToFile]();
        messages[locale] = module.default;
    }

    return messages
}

export function setLocale(locale) {
    if (i18n.global.availableLocales.includes(locale)) {
        i18n.global.locale.value = locale;
    } else {
        const context = import.meta.glob('./locales/!*.json');
        const pathToFile = `./locales/${locale}.json`;

        if (context[pathToFile]) {
            context[pathToFile]().then((module) => {
                i18n.global.setLocaleMessage(locale, module.default);
                i18n.global.locale.value = locale;
            });
        }
    }
}*/

export const SUPPORT_LOCALES = ['en', 'ru']

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru
    }
})

export async function loadLocaleMessages(i18n, locale) {
    // load locale messages with dynamic import
    const messages = await import(
        /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
        )

    // set locale and locale message
    i18n.global.setLocaleMessage(locale, messages.default)

    return nextTick()
}

export default i18n;