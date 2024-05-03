import "./styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import {createI18n} from "vue-i18n";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import './styles/main.css'

const app = createApp(App);

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru
    }
})


app.use(i18n)
app.mount("#app");
