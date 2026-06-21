const modData = {
    // ── Desktop: plugin-based (best experience) ──
    equicord: {
        logo: "https://equicord.org/assets/favicon.png",
        desc: "Equicord includes UserPFP as a built-in plugin. Go to <b>Settings &rarr; Plugins</b>, search for <b>UserPFP</b>, and enable it."
    },
    vencord: {
        logo: "https://equicord.org/assets/icons/vencord/icon.png",
        desc: "Vencord uses a theme-based implementation. Copy the link and paste it into <b>Settings &rarr; Themes &rarr; Online Themes</b>.",
        code: "https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css"
    },
    replugged: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/replugged/logo.png",
        desc: "Install UserPFP directly from the official Replugged plugin store.",
        link: "https://replugged.dev/store/dev.WolfPlugs.UserPFP"
    },
    shelter: {
        logo: "https://equicord.org/assets/icons/archive/shelter/icon.png",
        desc: "Add this URL to your Shelter plugins.",
        link: "https://spikehd.dev/shelter-plugins/userpfp/"
    },
    openasar: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/goosemod/logo.png",
        title: "OpenAsar",
        desc: "OpenAsar (formerly GooseMod) is a replacement for Discord's app.asar. Add the import line to the top of your <b>QuickCSS</b> to use UserPFP.",
        code: "@import url('https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css');"
    },
    betterdiscord: {
        logo: "https://equicord.org/assets/icons/archive/betterdiscord/icon.png",
        title: "Web-Based / BetterDiscord",
        desc: "Add the import line to the top of your <b>Custom CSS / QuickCSS</b> file. The CSS implementation is not recommended when a plugin option is available.",
        code: "@import url('https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css');"
    },
    // ── Mobile ──
    raincord: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/raincord/logo.png",
        title: "Rain",
        desc: "Rain includes UserPFP as a built-in plugin. Go to <b>Settings &rarr; Plugins &rarr; AnimatedProfiles</b>, and tap the enable button."
    },
    bunny: {
        logo: "https://equicord.org/assets/icons/archive/bunny/icon.png",
        desc: "Copy the plugin URL and add it to your Bunny plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    revenge: {
        logo: "https://equicord.org/assets/icons/archive/revenge/icon.png",
        desc: "Copy the plugin URL and add it to your Revenge plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    kettu: {
        logo: "https://equicord.org/assets/icons/archive/kettu/icon.png",
        desc: "Copy the plugin URL and add it to your Kettu plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    // ── Discontinued ──
    suncord: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/suncord/logo.png",
        title: "Suncord",
        deprecated: true,
        deprecatedMsg: "Suncord is no longer maintained and has been superseded by Equicord. We recommend switching to Equicord.",
        desc: "Suncord includes UserPFP as a built-in plugin (same as Equicord). Go to <b>Settings &rarr; Plugins</b>, search for <b>UserPFP</b>, and enable it. However, Suncord is no longer maintained, so switch to Equicord."
    },
    velocity: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/velocity/logo.png",
        title: "Velocity",
        deprecated: true,
        deprecatedMsg: "Velocity is no longer supported or maintained.",
        desc: "Velocity uses a theme-based implementation. Copy the link and add it to your theme settings.",
        code: "https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css"
    },
    aliucord: {
        logo: "https://equicord.org/assets/icons/archive/aliucord/icon.png",
        deprecated: true,
        deprecatedMsg: "Aliucord is no longer maintained and has been discontinued.",
        desc: "Download the plugin file from the link below and place it in your Aliucord plugins folder.",
        link: "https://github.com/OmegaSunkey/awesomeplugins/raw/builds/UserPFP.zip"
    },
    vendetta: {
        logo: "https://equicord.org/assets/icons/archive/vendetta/icon.png",
        deprecated: true,
        deprecatedMsg: "Vendetta is obsolete and no longer maintained.",
        desc: "Copy the plugin URL and add it to your plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    enmity: {
        logo: "https://raw.githubusercontent.com/Equicord/Equibored/main/images/clientMods/enmity/logo.png",
        title: "Enmity",
        deprecated: true,
        deprecatedMsg: "Enmity is not supported by UserPFP.",
        desc: "Enmity is currently not supported by UserPFP. There are no plans to add support at this time."
    }
};

const staffIds = [
    "406084422308331522","789872551731527690","853550207039832084",
    "848339671629299742","500212086765518858","250322741406859265",
    "929208515883569182","258731845267619840","1180778779682033715",
    "1124647765075566662","613725399263739926","422319200095436800"
];

const manualBanners = {
    "406084422308331522": "https://i.imgur.com/vzyxjz8.gif",
    "789872551731527690": "https://i.imgur.com/U3xaMjR.gif",
    "853550207039832084": "https://i.ibb.co/MBY0qxx/nexpid.gif",
    "848339671629299742": "https://i.imgur.com/FiRr8Lj.png",
    "500212086765518858": "https://i.imgur.com/bAuCtgB.png",
    "250322741406859265": "https://i.imgur.com/mkTL1S8.png",
    "929208515883569182": "https://i.imgur.com/ZflpQQ3.png",
    "258731845267619840": "https://i.imgur.com/2mitqtb.png"
};

const customPfps = {};
let usrbgData = null;
let wizardSteps = [];
let currentStep = 0;
let mobileOpen = false;

// --- UTILS ---

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildSkeletonCard() {
    return `<div class="profile-card skeleton">
        <div class="profile-banner"></div>
        <div class="profile-avatar-container"><div class="profile-avatar"></div></div>
        <div class="sk-body">
            <span class="sk-shine" style="width:62%;height:13px;margin-bottom:9px;"></span>
            <span class="sk-shine" style="width:40%;height:10px;margin-bottom:14px;"></span>
            <div class="profile-divider"></div>
            <span class="sk-shine" style="width:36%;height:9px;margin-bottom:9px;"></span>
            <span class="sk-shine" style="width:30%;height:22px;border-radius:4px;"></span>
        </div>
    </div>`;
}

// --- LANGUAGE PICKER (custom UI driving Google Translate) ---
// "code" values match the targets Google Translate's widget understands.

// A short list of common languages, plus the US/UK English and Simplified/Traditional
// Chinese variants. "g" is the Google Translate engine target a variant maps to.
const LANGS = [
    // English variants (all translate to the original English text)
    { code: 'en-GB', g: 'en', flag: '🇬🇧', native: 'Traditional English', sub: 'English (UK)' },
    { code: 'en-US', g: 'en', flag: '🇺🇸', native: 'English', sub: 'English (US)' },
    { code: 'en-AU', g: 'en', flag: '🇦🇺', native: 'English', sub: 'English (Australia)' },
    { code: 'en-CA', g: 'en', flag: '🇨🇦', native: 'English', sub: 'English (Canada)' },
    { code: 'en-IE', g: 'en', flag: '🇮🇪', native: 'English', sub: 'English (Ireland)' },
    { code: 'en-NZ', g: 'en', flag: '🇳🇿', native: 'English', sub: 'English (New Zealand)' },
    { code: 'en-ZA', g: 'en', flag: '🇿🇦', native: 'English', sub: 'English (South Africa)' },
    { code: 'en-IN', g: 'en', flag: '🇮🇳', native: 'English', sub: 'English (India)' },
    { code: 'en-NG', g: 'en', flag: '🇳🇬', native: 'English', sub: 'English (Nigeria)' },
    { code: 'en-SG', g: 'en', flag: '🇸🇬', native: 'English', sub: 'English (Singapore)' },
    { code: 'en-PH', g: 'en', flag: '🇵🇭', native: 'English', sub: 'English (Philippines)' },
    { code: 'en-JM', g: 'en', flag: '🇯🇲', native: 'English', sub: 'English (Jamaica)' },
    // Everything else, alphabetical by English name
    { code: 'af',    flag: '🇿🇦', native: 'Afrikaans', sub: 'Afrikaans' },
    { code: 'sq',    flag: '🇦🇱', native: 'Shqip', sub: 'Albanian' },
    { code: 'am',    flag: '🇪🇹', native: 'አማርኛ', sub: 'Amharic' },
    { code: 'ar',    flag: '🇸🇦', native: 'العربية', sub: 'Arabic', rtl: true },
    { code: 'hy',    flag: '🇦🇲', native: 'Հայերեն', sub: 'Armenian' },
    { code: 'as',    flag: '🇮🇳', native: 'অসমীয়া', sub: 'Assamese' },
    { code: 'ay',    flag: '🇧🇴', native: 'Aymar aru', sub: 'Aymara' },
    { code: 'az',    flag: '🇦🇿', native: 'Azərbaycan', sub: 'Azerbaijani' },
    { code: 'bm',    flag: '🇲🇱', native: 'Bamanankan', sub: 'Bambara' },
    { code: 'eu',    flag: '🇪🇸', native: 'Euskara', sub: 'Basque' },
    { code: 'be',    flag: '🇧🇾', native: 'Беларуская', sub: 'Belarusian' },
    { code: 'bn',    flag: '🇧🇩', native: 'বাংলা', sub: 'Bengali' },
    { code: 'bho',   flag: '🇮🇳', native: 'भोजपुरी', sub: 'Bhojpuri' },
    { code: 'bs',    flag: '🇧🇦', native: 'Bosanski', sub: 'Bosnian' },
    { code: 'bg',    flag: '🇧🇬', native: 'Български', sub: 'Bulgarian' },
    { code: 'ca',    flag: '🇪🇸', native: 'Català', sub: 'Catalan' },
    { code: 'ceb',   flag: '🇵🇭', native: 'Cebuano', sub: 'Cebuano' },
    { code: 'ny',    flag: '🇲🇼', native: 'Chichewa', sub: 'Chichewa' },
    { code: 'zh-CN', flag: '🇨🇳', native: '简体中文', sub: 'Chinese (Simplified)' },
    { code: 'zh-TW', flag: '🇹🇼', native: '繁體中文', sub: 'Chinese (Traditional)' },
    { code: 'co',    flag: '🇫🇷', native: 'Corsu', sub: 'Corsican' },
    { code: 'hr',    flag: '🇭🇷', native: 'Hrvatski', sub: 'Croatian' },
    { code: 'cs',    flag: '🇨🇿', native: 'Čeština', sub: 'Czech' },
    { code: 'da',    flag: '🇩🇰', native: 'Dansk', sub: 'Danish' },
    { code: 'dv',    flag: '🇲🇻', native: 'ދިވެހި', sub: 'Dhivehi', rtl: true },
    { code: 'doi',   flag: '🇮🇳', native: 'डोगरी', sub: 'Dogri' },
    { code: 'nl',    flag: '🇳🇱', native: 'Nederlands', sub: 'Dutch' },
    { code: 'eo',    flag: '🌐', native: 'Esperanto', sub: 'Esperanto' },
    { code: 'et',    flag: '🇪🇪', native: 'Eesti', sub: 'Estonian' },
    { code: 'ee',    flag: '🇬🇭', native: 'Eʋegbe', sub: 'Ewe' },
    { code: 'tl',    flag: '🇵🇭', native: 'Filipino', sub: 'Filipino' },
    { code: 'fi',    flag: '🇫🇮', native: 'Suomi', sub: 'Finnish' },
    { code: 'fr-FR', g: 'fr', flag: '🇫🇷', native: 'Français', sub: 'French (France)' },
    { code: 'fr-CA', g: 'fr', flag: '🇨🇦', native: 'Français', sub: 'French (Canada)' },
    { code: 'fy',    flag: '🇳🇱', native: 'Frysk', sub: 'Frisian' },
    { code: 'gl',    flag: '🇪🇸', native: 'Galego', sub: 'Galician' },
    { code: 'ka',    flag: '🇬🇪', native: 'ქართული', sub: 'Georgian' },
    { code: 'de',    flag: '🇩🇪', native: 'Deutsch', sub: 'German' },
    { code: 'el',    flag: '🇬🇷', native: 'Ελληνικά', sub: 'Greek' },
    { code: 'gn',    flag: '🇵🇾', native: 'Avañeʼẽ', sub: 'Guarani' },
    { code: 'gu',    flag: '🇮🇳', native: 'ગુજરાતી', sub: 'Gujarati' },
    { code: 'ht',    flag: '🇭🇹', native: 'Kreyòl Ayisyen', sub: 'Haitian Creole' },
    { code: 'ha',    flag: '🇳🇬', native: 'Hausa', sub: 'Hausa' },
    { code: 'haw',   flag: '🇺🇸', native: 'ʻŌlelo Hawaiʻi', sub: 'Hawaiian' },
    { code: 'iw',    flag: '🇮🇱', native: 'עברית', sub: 'Hebrew', rtl: true },
    { code: 'hi',    flag: '🇮🇳', native: 'हिन्दी', sub: 'Hindi' },
    { code: 'hmn',   flag: '🌐', native: 'Hmoob', sub: 'Hmong' },
    { code: 'hu',    flag: '🇭🇺', native: 'Magyar', sub: 'Hungarian' },
    { code: 'is',    flag: '🇮🇸', native: 'Íslenska', sub: 'Icelandic' },
    { code: 'ig',    flag: '🇳🇬', native: 'Igbo', sub: 'Igbo' },
    { code: 'ilo',   flag: '🇵🇭', native: 'Ilokano', sub: 'Ilocano' },
    { code: 'id',    flag: '🇮🇩', native: 'Bahasa Indonesia', sub: 'Indonesian' },
    { code: 'ga',    flag: '🇮🇪', native: 'Gaeilge', sub: 'Irish' },
    { code: 'it',    flag: '🇮🇹', native: 'Italiano', sub: 'Italian' },
    { code: 'ja',    flag: '🇯🇵', native: '日本語', sub: 'Japanese' },
    { code: 'jw',    flag: '🇮🇩', native: 'Basa Jawa', sub: 'Javanese' },
    { code: 'kn',    flag: '🇮🇳', native: 'ಕನ್ನಡ', sub: 'Kannada' },
    { code: 'kk',    flag: '🇰🇿', native: 'Қазақ', sub: 'Kazakh' },
    { code: 'km',    flag: '🇰🇭', native: 'ខ្មែរ', sub: 'Khmer' },
    { code: 'rw',    flag: '🇷🇼', native: 'Kinyarwanda', sub: 'Kinyarwanda' },
    { code: 'gom',   flag: '🇮🇳', native: 'कोंकणी', sub: 'Konkani' },
    { code: 'ko',    flag: '🇰🇷', native: '한국어', sub: 'Korean' },
    { code: 'kri',   flag: '🇸🇱', native: 'Krio', sub: 'Krio' },
    { code: 'ku',    flag: '🇹🇷', native: 'Kurmancî', sub: 'Kurdish (Kurmanji)' },
    { code: 'ckb',   flag: '🇮🇶', native: 'کوردی', sub: 'Kurdish (Sorani)', rtl: true },
    { code: 'ky',    flag: '🇰🇬', native: 'Кыргызча', sub: 'Kyrgyz' },
    { code: 'lo',    flag: '🇱🇦', native: 'ລາວ', sub: 'Lao' },
    { code: 'la',    flag: '🌐', native: 'Latina', sub: 'Latin' },
    { code: 'lv',    flag: '🇱🇻', native: 'Latviešu', sub: 'Latvian' },
    { code: 'ln',    flag: '🇨🇩', native: 'Lingála', sub: 'Lingala' },
    { code: 'lt',    flag: '🇱🇹', native: 'Lietuvių', sub: 'Lithuanian' },
    { code: 'lg',    flag: '🇺🇬', native: 'Luganda', sub: 'Luganda' },
    { code: 'lb',    flag: '🇱🇺', native: 'Lëtzebuergesch', sub: 'Luxembourgish' },
    { code: 'mk',    flag: '🇲🇰', native: 'Македонски', sub: 'Macedonian' },
    { code: 'mai',   flag: '🇮🇳', native: 'मैथिली', sub: 'Maithili' },
    { code: 'mg',    flag: '🇲🇬', native: 'Malagasy', sub: 'Malagasy' },
    { code: 'ms',    flag: '🇲🇾', native: 'Bahasa Melayu', sub: 'Malay' },
    { code: 'ml',    flag: '🇮🇳', native: 'മലയാളം', sub: 'Malayalam' },
    { code: 'mt',    flag: '🇲🇹', native: 'Malti', sub: 'Maltese' },
    { code: 'mi',    flag: '🇳🇿', native: 'Māori', sub: 'Maori' },
    { code: 'mr',    flag: '🇮🇳', native: 'मराठी', sub: 'Marathi' },
    { code: 'mni-Mtei', flag: '🇮🇳', native: 'ꯃꯤꯇꯩꯂꯣꯟ', sub: 'Meiteilon (Manipuri)' },
    { code: 'lus',   flag: '🇮🇳', native: 'Mizo ṭawng', sub: 'Mizo' },
    { code: 'mn',    flag: '🇲🇳', native: 'Монгол', sub: 'Mongolian' },
    { code: 'my',    flag: '🇲🇲', native: 'မြန်မာ', sub: 'Myanmar (Burmese)' },
    { code: 'ne',    flag: '🇳🇵', native: 'नेपाली', sub: 'Nepali' },
    { code: 'no',    flag: '🇳🇴', native: 'Norsk', sub: 'Norwegian' },
    { code: 'or',    flag: '🇮🇳', native: 'ଓଡ଼ିଆ', sub: 'Odia (Oriya)' },
    { code: 'om',    flag: '🇪🇹', native: 'Afaan Oromoo', sub: 'Oromo' },
    { code: 'ps',    flag: '🇦🇫', native: 'پښتو', sub: 'Pashto', rtl: true },
    { code: 'fa',    flag: '🇮🇷', native: 'فارسی', sub: 'Persian', rtl: true },
    { code: 'pl',    flag: '🇵🇱', native: 'Polski', sub: 'Polish' },
    { code: 'pt-PT', g: 'pt', flag: '🇵🇹', native: 'Português', sub: 'Portuguese (Portugal)' },
    { code: 'pt-BR', g: 'pt', flag: '🇧🇷', native: 'Português', sub: 'Portuguese (Brazil)' },
    { code: 'pa',    flag: '🇮🇳', native: 'ਪੰਜਾਬੀ', sub: 'Punjabi' },
    { code: 'qu',    flag: '🇵🇪', native: 'Runa Simi', sub: 'Quechua' },
    { code: 'ro',    flag: '🇷🇴', native: 'Română', sub: 'Romanian' },
    { code: 'ru',    flag: '🇷🇺', native: 'Русский', sub: 'Russian' },
    { code: 'sm',    flag: '🇼🇸', native: 'Gagana Samoa', sub: 'Samoan' },
    { code: 'sa',    flag: '🌐', native: 'संस्कृतम्', sub: 'Sanskrit' },
    { code: 'gd',    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', native: 'Gàidhlig', sub: 'Scots Gaelic' },
    { code: 'nso',   flag: '🇿🇦', native: 'Sepedi', sub: 'Sepedi' },
    { code: 'sr',    flag: '🇷🇸', native: 'Српски', sub: 'Serbian' },
    { code: 'st',    flag: '🇱🇸', native: 'Sesotho', sub: 'Sesotho' },
    { code: 'sn',    flag: '🇿🇼', native: 'ChiShona', sub: 'Shona' },
    { code: 'sd',    flag: '🇵🇰', native: 'سنڌي', sub: 'Sindhi', rtl: true },
    { code: 'si',    flag: '🇱🇰', native: 'සිංහල', sub: 'Sinhala' },
    { code: 'sk',    flag: '🇸🇰', native: 'Slovenčina', sub: 'Slovak' },
    { code: 'sl',    flag: '🇸🇮', native: 'Slovenščina', sub: 'Slovenian' },
    { code: 'so',    flag: '🇸🇴', native: 'Soomaali', sub: 'Somali' },
    { code: 'es-ES', g: 'es', flag: '🇪🇸', native: 'Español', sub: 'Spanish (Spain)' },
    { code: 'es-MX', g: 'es', flag: '🇲🇽', native: 'Español', sub: 'Spanish (Mexico)' },
    { code: 'es-AR', g: 'es', flag: '🇦🇷', native: 'Español', sub: 'Spanish (Argentina)' },
    { code: 'su',    flag: '🇮🇩', native: 'Basa Sunda', sub: 'Sundanese' },
    { code: 'sw',    flag: '🇰🇪', native: 'Kiswahili', sub: 'Swahili' },
    { code: 'sv',    flag: '🇸🇪', native: 'Svenska', sub: 'Swedish' },
    { code: 'tg',    flag: '🇹🇯', native: 'Тоҷикӣ', sub: 'Tajik' },
    { code: 'ta',    flag: '🇮🇳', native: 'தமிழ்', sub: 'Tamil' },
    { code: 'tt',    flag: '🇷🇺', native: 'Татарча', sub: 'Tatar' },
    { code: 'te',    flag: '🇮🇳', native: 'తెలుగు', sub: 'Telugu' },
    { code: 'th',    flag: '🇹🇭', native: 'ไทย', sub: 'Thai' },
    { code: 'ti',    flag: '🇪🇷', native: 'ትግርኛ', sub: 'Tigrinya' },
    { code: 'ts',    flag: '🇿🇦', native: 'Xitsonga', sub: 'Tsonga' },
    { code: 'tr',    flag: '🇹🇷', native: 'Türkçe', sub: 'Turkish' },
    { code: 'tk',    flag: '🇹🇲', native: 'Türkmen', sub: 'Turkmen' },
    { code: 'ak',    flag: '🇬🇭', native: 'Twi', sub: 'Twi' },
    { code: 'uk',    flag: '🇺🇦', native: 'Українська', sub: 'Ukrainian' },
    { code: 'ur',    flag: '🇵🇰', native: 'اردو', sub: 'Urdu', rtl: true },
    { code: 'ug',    flag: '🇨🇳', native: 'ئۇيغۇرچە', sub: 'Uyghur', rtl: true },
    { code: 'uz',    flag: '🇺🇿', native: 'Oʻzbek', sub: 'Uzbek' },
    { code: 'vi',    flag: '🇻🇳', native: 'Tiếng Việt', sub: 'Vietnamese' },
    { code: 'cy',    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', native: 'Cymraeg', sub: 'Welsh' },
    { code: 'xh',    flag: '🇿🇦', native: 'isiXhosa', sub: 'Xhosa' },
    { code: 'yi',    flag: '🇮🇱', native: 'ייִדיש', sub: 'Yiddish', rtl: true },
    { code: 'yo',    flag: '🇳🇬', native: 'Yorùbá', sub: 'Yoruba' },
    { code: 'zu',    flag: '🇿🇦', native: 'isiZulu', sub: 'Zulu' }
];

function getCurrentLang() {
    try { const s = localStorage.getItem('siteLang'); if (s) return s; } catch (e) {}
    const m = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
    if (!m) return 'en-GB';
    const g = decodeURIComponent(m[1]);
    if (g === 'en') return 'en-GB';
    const hit = LANGS.find(l => (l.g || l.code) === g);
    return hit ? hit.code : g;
}

const LANG_CHECK = '<svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

// Render emoji (flags) as Twemoji images so they look identical on every OS, Windows included.
function parseTwemoji(el) {
    if (!el || typeof twemoji === 'undefined') return;
    twemoji.parse(el, {
        folder: 'svg',
        ext: '.svg',
        className: 'emoji',
        base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/'
    });
}

function buildLangMenu() {
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    const current = getCurrentLang();
    const options = LANGS.map(l => {
        const active = l.code === current ? ' active' : '';
        const dir = l.rtl ? ' dir="rtl"' : '';
        return `<button class="lang-option${active}" role="option" data-code="${l.code}" onclick="selectLang('${l.code}')">
            <span class="lang-flag" aria-hidden="true">${l.flag}</span>
            <span class="lang-text"${dir}><span class="lang-native">${l.native}</span> <span class="lang-sub">${l.sub}</span></span>${LANG_CHECK}
        </button>`;
    }).join('');
    menu.innerHTML = `<div id="langOptions">${options}</div>`;
    const curLang = LANGS.find(l => l.code === current) || LANGS[0];
    const cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = curLang.native;
    const flag = document.getElementById('langFlag');
    if (flag) { flag.textContent = curLang.flag; parseTwemoji(flag); }
}

function toggleLangMenu(e) {
    if (e) e.stopPropagation();
    const picker = document.getElementById('langPicker');
    if (!picker) return;
    const open = picker.classList.toggle('open');
    document.getElementById('langBtn').setAttribute('aria-expanded', open);
    if (open) {
        const menu = document.getElementById('langMenu');
        if (menu && !menu.dataset.twemoji) { parseTwemoji(menu); menu.dataset.twemoji = '1'; }
    }
}

function closeLangMenu() {
    const picker = document.getElementById('langPicker');
    if (picker && picker.classList.contains('open')) {
        picker.classList.remove('open');
        document.getElementById('langBtn')?.setAttribute('aria-expanded', 'false');
    }
}

function selectLang(code) {
    if (code === getCurrentLang()) { closeLangMenu(); return; }
    const lang = LANGS.find(l => l.code === code);
    const g = lang ? (lang.g || lang.code) : code;
    try { localStorage.setItem('siteLang', code); } catch (e) {}
    const val = g === 'en' ? '/en/en' : '/en/' + g;
    document.cookie = 'googtrans=' + val + ';path=/';
    document.cookie = 'googtrans=' + val + ';path=/;domain=.' + location.hostname;
    location.reload();
}

// --- INIT ---

function init() {
    window.addEventListener('scroll', () => {
        document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
            const dd = document.getElementById('clientDropdown');
            if (dd?.classList.contains('show')) dd.classList.remove('show');
            if (mobileOpen) closeMobileMenu();
            closeLangMenu();
        }
    });
    window.addEventListener('click', e => {
        const dd = document.getElementById('clientDropdown');
        if (dd?.classList.contains('show')) dd.classList.remove('show');
        const menu = document.getElementById('mobileMenu');
        const burger = document.getElementById('hamburger');
        if (mobileOpen && menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) closeMobileMenu();
        const lp = document.getElementById('langPicker');
        if (lp && !lp.contains(e.target)) closeLangMenu();
    });
    window.addEventListener('scroll', () => {
        document.getElementById('backToTop')?.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    const modal = document.getElementById('infoModal');
    if (modal) modal.addEventListener('click', e => { if (e.target.id === 'infoModal') closeModal(); });

    buildLangMenu();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 60);

    if (document.getElementById('modGrid')) {
        renderMods();
        renderDropdown();
        loadData();
        initDemoCard();
    }
    if (document.getElementById('staffGrid')) {
        loadStaff();
    }
}

// --- MOBILE MENU ---

function toggleMobileMenu() {
    mobileOpen = !mobileOpen;
    document.getElementById('mobileMenu').classList.toggle('open', mobileOpen);
    document.getElementById('hamburger').classList.toggle('open', mobileOpen);
    document.getElementById('hamburger').setAttribute('aria-expanded', mobileOpen);
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
}

function closeMobileMenu() {
    mobileOpen = false;
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// --- DATA LOADING ---

async function loadData() {
    fetch('/api/count').then(r => r.json()).then(d => animateCount('statProfiles', d.count)).catch(() => {});
    const onlineEl = document.getElementById('statOnline');
    const onlineLabelEl = onlineEl?.closest('.stat-item')?.querySelector('.stat-label');
    const showFallbackStat = () => {
        if (onlineEl) onlineEl.textContent = '10+';
        if (onlineLabelEl) onlineLabelEl.textContent = 'Supported Clients';
    };
    (async () => {
        const urls = [
            '/api/widget',
            'https://discord.com/api/guilds/1129784704267210844/widget.json'
        ];
        for (const url of urls) {
            try {
                const r = await fetch(url);
                if (!r.ok) continue;
                const d = await r.json();
                if (d.presence_count > 0) { animateCount('statOnline', d.presence_count); return; }
            } catch {}
        }
        showFallbackStat();
    })();

    if (window.innerWidth > 768) {
        try {
            await fetchCustomPfps();
            const urls = Object.values(customPfps);
            const shuffled = [...urls].sort(() => 0.5 - Math.random()).slice(0, 40);
            const fill = (id, items) => {
                const el = document.getElementById(id);
                if (!el) return;
                [...items, ...items].forEach(url => {
                    const img = document.createElement('img');
                    img.src = url; img.className = 'bg-pfp'; img.loading = 'lazy';
                    img.onerror = () => img.remove();
                    el.appendChild(img);
                });
            };
            fill('track1', shuffled.slice(0, 20));
            fill('track2', shuffled.slice(20, 40));
        } catch {}
    }
}

function animateCount(id, target) {
    const el = document.getElementById(id);
    if (!el) return;
    const dur = 1400, start = performance.now();
    const tick = now => {
        const t = Math.min((now - start) / dur, 1);
        const val = Math.round((1 - Math.pow(1 - t, 3)) * target);
        el.textContent = val >= 1000 ? (val / 1000).toFixed(1) + 'K+' : val + '+';
        if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

// --- TOAST ---

function showToast(msg) {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => {
        t.classList.add('out');
        setTimeout(() => t.remove(), 280);
    }, 2400);
}

// --- DEMO CARD ---

async function initDemoCard() {
    const container = document.getElementById('demoContainer');
    if (!container) return;

    container.innerHTML = buildSkeletonCard();

    try {
        await Promise.all([fetchCustomPfps(), fetchUsrbg()]);

        const candidates = staffIds.filter(id => customPfps[id]);
        if (candidates.length === 0) return;
        const targetId = candidates[Math.floor(Math.random() * candidates.length)];
        const animatedUrl = customPfps[targetId];
        if (!animatedUrl) return;

        const [lr, br, dr] = await Promise.all([
            fetch(`https://lanyard.equicord.org/v1/users/${targetId}`).then(r => r.json()),
            fetch(`https://badges.equicord.org/${targetId}`).then(r => r.json()).catch(() => null),
            fetch(`https://decor.fieryflames.dev/api/users/${targetId}`).then(r => r.json()).catch(() => null)
        ]);
        if (!lr.success) return;

        const u = lr.data.discord_user;
        const staticUrl = u.avatar
            ? `https://cdn.discordapp.com/avatars/${targetId}/${u.avatar}.webp?size=128`
            : 'https://cdn.discordapp.com/embed/avatars/0.png';

        container.innerHTML = buildCard(lr.data, targetId, br || [], dr, { avatarOverride: staticUrl });

        const avatarEl  = container.querySelector('.profile-avatar');
        const imgEl     = container.querySelector('.avatar-img');
        const labelEl   = document.getElementById('demoLabel');
        let withPfp = false;

        const runTransition = () => {
            // Phase 1: Charge (520ms), ring builds, image dims to white
            avatarEl?.classList.add('upgrade-charge-ring');
            imgEl?.classList.add('upgrade-dim-flash');

            setTimeout(() => {
                // ── Phase 2: Swap at peak white-flash, then emerge ──
                withPfp = !withPfp;
                if (imgEl) imgEl.src = withPfp ? animatedUrl : staticUrl;

                avatarEl?.classList.remove('upgrade-charge-ring');
                avatarEl?.classList.add('upgrade-glow-fade');
                imgEl?.classList.remove('upgrade-dim-flash');
                imgEl?.classList.add('upgrade-emerge');

                // Ripple ring bursts outward
                if (avatarEl) {
                    const ripple = document.createElement('div');
                    ripple.className = 'upgrade-ripple';
                    avatarEl.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 700);
                }

                // Label: fade out, swap text, slide up
                if (labelEl) {
                    labelEl.style.opacity = '0';
                    setTimeout(() => {
                        labelEl.textContent = withPfp ? '✦ WITH USERPFP' : 'WITHOUT USERPFP';
                        labelEl.classList.toggle('active', withPfp);
                        labelEl.classList.remove('demo-label-in');
                        void labelEl.offsetWidth;
                        labelEl.classList.add('demo-label-in');
                    }, 70);
                }

                // ── Phase 3: Settle + queue next cycle ──
                setTimeout(() => {
                    avatarEl?.classList.remove('upgrade-glow-fade');
                    imgEl?.classList.remove('upgrade-emerge');
                    setTimeout(runTransition, 3200);
                }, 940);
            }, 520);
        };

        setTimeout(runTransition, 3200);
    } catch {}
}

// --- MOD GRID ---

function renderMods() {
    const g = document.getElementById('modGrid');
    Object.entries(modData).forEach(([key, data]) => {
        const label = data.title || (key[0].toUpperCase() + key.slice(1));
        const b = document.createElement('div');
        b.className = `mod-btn${data.deprecated ? ' deprecated' : ''}`;
        const labelClass = label.length > 10 ? 'mod-label mod-label-xs' : label.length > 7 ? 'mod-label mod-label-sm' : 'mod-label';
        b.innerHTML = `<img src="${data.logo}" alt="${label}" loading="lazy"><span class="${labelClass}">${label}</span>`;
        b.setAttribute('role', 'button');
        b.setAttribute('tabindex', '0');
        b.setAttribute('aria-label', `${label} installation guide`);
        b.onclick = () => openModal(key, data);
        b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(key, data); } });
        g.appendChild(b);
    });
}

// --- DROPDOWN ---

function renderDropdown() {
    const menu = document.getElementById('clientDropdown');
    if (!menu) return;
    menu.addEventListener('click', e => e.stopPropagation());
    menu.innerHTML = `
        <div class="dropdown-header">Select Client</div>
        <div class="dropdown-search-wrapper">
            <input type="text" id="clientSearch" class="dropdown-search" placeholder="Search clients..." oninput="filterDropdown()">
        </div>
        <div id="dropdownList" class="dropdown-list-container"></div>`;
    const list = document.getElementById('dropdownList');
    Object.entries(modData).forEach(([key, data]) => {
        const label = data.title || (key[0].toUpperCase() + key.slice(1));
        const item = document.createElement('div');
        item.className = `dropdown-item${data.deprecated ? ' dropdown-item-deprecated' : ''}`;
        item.setAttribute('data-name', key);
        item.innerHTML = `<img src="${data.logo}" alt="${label}"> ${label}${data.deprecated ? ' <span style="font-size:0.65rem;color:rgba(234,179,8,0.8);font-weight:700;margin-left:4px;">🚧</span>' : ''}`;
        item.onclick = () => {
            document.getElementById('clientDropdown').classList.remove('show');
            setTimeout(() => openModal(key, data), 150);
        };
        list.appendChild(item);
    });
}

function filterDropdown() {
    const q = document.getElementById('clientSearch').value.toLowerCase();
    document.querySelectorAll('.dropdown-item').forEach(i => {
        i.style.display = i.getAttribute('data-name').toLowerCase().includes(q) ? 'flex' : 'none';
    });
}

function toggleDropdown(e) {
    e?.stopPropagation();
    const m = document.getElementById('clientDropdown');
    m.classList.toggle('show');
    if (m.classList.contains('show')) setTimeout(() => document.getElementById('clientSearch')?.focus(), 100);
}

// --- STAFF ---

async function loadStaff() {
    const grid = document.getElementById('staffGrid');
    const loader = document.getElementById('staffLoader');
    if (loader) loader.style.display = 'none';
    grid.innerHTML = Array(staffIds.length).fill(0).map(buildSkeletonCard).join('');
    try {
        await Promise.all([fetchCustomPfps(), fetchUsrbg()]);
        const order = shuffle(staffIds);
        const results = await Promise.all(order.map(async id => {
            try {
                const [lr, br, dr] = await Promise.all([
                    fetch(`https://lanyard.equicord.org/v1/users/${id}`).then(r => r.json()),
                    fetch(`https://badges.equicord.org/${id}`).then(r => r.json()).catch(() => null),
                    fetch(`https://decor.fieryflames.dev/api/users/${id}`).then(r => r.json()).catch(() => null)
                ]);
                return lr.success ? { id, data: lr.data, badges: br || [], decor: dr } : null;
            } catch { return null; }
        }));
        grid.innerHTML = results.filter(Boolean).map((r, i) =>
            buildCard(r.data, r.id, r.badges, r.decor, { animDelay: i * 0.055 })
        ).join('');
    } catch {
        grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;width:100%">Unable to load staff. Please try again later.</p>';
    }
}

async function fetchCustomPfps() {
    if (Object.keys(customPfps).length) return;
    try {
        const res = await fetch('/api/pfps');
        if (!res.ok) return;
        Object.assign(customPfps, await res.json());
    } catch {}
}

async function fetchUsrbg() {
    try {
        const res = await fetch("https://usrbg.is-hardly.online/users");
        if (res.ok) usrbgData = await res.json();
    } catch {}
}

function getUsrbgUrl(id) {
    if (!usrbgData?.users?.[id]) return null;
    const { endpoint, bucket, prefix, users: { [id]: etag } } = usrbgData;
    return `${endpoint}/${bucket}/${prefix}${id}?${etag}`;
}

function buildCard(data, id, badgeData, decorData, opts = {}) {
    const { avatarOverride = null, showDemoBadge = false, animDelay = 0 } = opts;
    const u = data.discord_user;
    const avatar = avatarOverride || customPfps[id] || (u.avatar
        ? `https://cdn.discordapp.com/avatars/${id}/${u.avatar}.${u.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`
        : 'https://cdn.discordapp.com/embed/avatars/0.png');

    const bannerUrl = getUsrbgUrl(id) || manualBanners[id] || '';
    const bannerStyle = bannerUrl
        ? `style="background-image:url('${bannerUrl}')"`
        : u.banner_color ? `style="background-color:${u.banner_color}"` : '';

    // Decoration: Decor plugin first, then Discord native, then nothing
    let decor = '';
    if (decorData?.decorationHash) {
        const h = decorData.decorationHash;
        decor = `<img class="profile-decoration" src="https://decorcdn.fieryflames.dev/${h}.gif" onerror="this.onerror=null;this.src='https://decorcdn.fieryflames.dev/${h}.png'" alt="">`;
    } else if (u.avatar_decoration_data?.asset) {
        decor = `<img class="profile-decoration" src="https://cdn.discordapp.com/avatar-decoration-presets/${u.avatar_decoration_data.asset}.png?passthrough=true" alt="">`;
    }

    // Status dot
    const statusMap = { online: 'status-online', idle: 'status-idle', dnd: 'status-dnd' };
    const statusClass = statusMap[data.discord_status] || 'status-offline';

    // Badges with tooltip wraps
    let badgeHtml = '';
    if (badgeData?.badges?.length) {
        badgeData.badges.forEach(b => {
            const img = b.badge || b.image;
            const name = b.tooltip || b.name || 'Badge';
            if (img) badgeHtml += `<div class="badge-wrap" data-tooltip="${name}"><img src="${img}" alt="${name}" class="badge-icon"></div>`;
        });
    }

    // Custom status inline below username
    const custom = data.activities?.find(a => a.type === 4);
    let customStatusHtml = '';
    if (custom?.state || custom?.emoji) {
        let emoji = '';
        if (custom.emoji?.id) emoji = `<img src="https://cdn.discordapp.com/emojis/${custom.emoji.id}.webp?size=44" class="emoji-inline" alt="">`;
        else if (custom.emoji?.name) emoji = `<span>${custom.emoji.name}</span>`;
        customStatusHtml = `<div class="profile-custom-status">${emoji}${custom.state || ''}</div>`;
    }

    // Rich activity (shown above the divider/roles)
    const rich = data.activities?.find(a => a.type !== 4);
    let activityHtml = '';
    if (rich) {
        const typeLabels = { 0: 'Playing a game', 1: 'Live on Twitch', 2: 'Listening to Spotify', 3: 'Watching', 5: 'Competing in' };
        const typeLabel = typeLabels[rich.type] ?? 'Playing a game';
        let icon = null;
        if (rich.assets?.large_image) {
            const img = rich.assets.large_image;
            if (img.startsWith('mp:')) icon = `https://media.discordapp.net/${img.replace('mp:', '')}`;
            else if (img.startsWith('spotify:')) icon = `https://i.scdn.co/image/${img.replace('spotify:', '')}`;
            else icon = `https://cdn.discordapp.com/app-assets/${rich.application_id}/${img}.png`;
        } else if (rich.application_id) {
            icon = `https://dcdn.dstn.to/app-icons/${rich.application_id}`;
        }
        activityHtml = `<div class="activity-card">
            <div class="activity-type">${typeLabel}</div>
            <div class="activity-row">
                ${icon ? `<img src="${icon}" class="activity-icon" onerror="this.style.display='none'">` : ''}
                <div class="activity-info">
                    <div class="activity-title">${rich.name}</div>
                    <div class="activity-subtitle">${rich.details || rich.state || ''}</div>
                </div>
            </div>
        </div>`;
    }

    const demoBadgeHtml = showDemoBadge ? `<div class="demo-state-badge">WITHOUT USERPFP</div>` : '';

    const delayStyle = animDelay ? ` style="animation-delay:${animDelay}s"` : '';
    return `<div class="profile-card"${delayStyle}>
        <div class="profile-banner" ${bannerStyle}>${demoBadgeHtml}</div>
        <div class="badge-container">${badgeHtml}</div>
        <div class="profile-avatar-container">
            <div class="profile-avatar">
                <img class="avatar-img" src="${avatar}" alt="${u.username}">
                ${decor}
                <div class="status-dot ${statusClass}"></div>
            </div>
        </div>
        <div class="profile-body">
            <div class="profile-name-container">
                <div class="profile-displayname">${u.global_name || u.username}</div>
                <div class="profile-username">@${u.username}</div>
                ${customStatusHtml}
            </div>
            ${activityHtml}
            <div class="profile-divider"></div>
            <div class="profile-section-label">Roles</div>
            <div class="profile-roles">
                <div class="role-badge"><div class="role-dot" style="background:#22c55e"></div>Staff</div>
            </div>
        </div>
    </div>`;
}

// --- MODAL / WIZARD ---

function openModal(title, data) {
    const name = data.title || (title[0].toUpperCase() + title.slice(1));
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalClientIcon').src = data.logo;

    const warnHtml = data.deprecated ? `<div class="modal-deprecated-warning"><div class="mdw-icon">🚧</div><div class="mdw-text"><strong>Not Supported</strong><p>${data.deprecatedMsg}</p></div></div>` : '';
    wizardSteps = [{ html: `${warnHtml}<div class="wizard-text">${data.desc}</div>` }];

    if (data.code) {
        const escapedCode = data.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        wizardSteps.push({ html: `
            <div class="wizard-text">Copy the code below:</div>
            <div class="code-window">
                <div class="code-header">
                    <span class="code-lang">CSS / Link</span>
                    <button class="copy-code-btn" data-copy="${escapedCode}" onclick="copyCode(this)">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        COPY
                    </button>
                </div>
                <div class="code-content notranslate" translate="no">${escapedCode}</div>
            </div>`
        });
    } else if (data.link) {
        wizardSteps.push({ html: `
            <div class="wizard-text">Click below to open the installation page:</div>
            <a href="${data.link}" target="_blank" class="btn-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Open Installation Page
            </a>`
        });
    }

    currentStep = 0;
    renderStep();
    document.getElementById('infoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderStep() {
    const dots = document.getElementById('wizardDots');
    if (wizardSteps.length > 1) {
        dots.innerHTML = wizardSteps.map((_, i) => `<div class="wdot ${i === currentStep ? 'on' : ''}"></div>`).join('');
        dots.style.display = 'flex';
    } else {
        dots.style.display = 'none';
    }

    const isLast = currentStep === wizardSteps.length - 1;
    document.getElementById('modalBody').innerHTML = `
        <div class="wizard-step active">
            ${wizardSteps[currentStep].html}
            <div class="wizard-nav">
                ${currentStep > 0 ? `<button class="btn-wizard btn-prev" onclick="changeStep(-1)">Back</button>` : ''}
                <button class="btn-wizard btn-next" onclick="${isLast ? 'closeModal()' : 'changeStep(1)'}">${isLast ? 'Done' : 'Next &rarr;'}</button>
            </div>
        </div>`;
}

function changeStep(dir) { currentStep += dir; renderStep(); }

function closeModal() {
    document.getElementById('infoModal').classList.remove('open');
    document.body.style.overflow = '';
}

function copyCode(btnOrText) {
    const text = typeof btnOrText === 'string' ? btnOrText : btnOrText.dataset.copy;
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
}

init();
