let fromTxt = document.querySelector(".from-text");
let toTxt = document.querySelector(".to-text");
let allIs = document.querySelectorAll(".icons i");
let select = document.querySelectorAll("select");

let exchange = document.querySelector(".exchange");
let btn = document.querySelector("button");

const countries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "en-GB": "English",
  "es-ES": "Spanish",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu",
};

// countries options for loop
select.forEach((country, index) => {
  for (let country_code in countries) {
    let selected =
      index == 0
        ? country_code == "en-GB"
          ? "selected"
          : ""
        : country_code == "ar-SA"
        ? "selected"
        : "";
    let opt = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;

    country.insertAdjacentHTML("beforeend", opt);
  }
});

// exchange lang process
exchange.addEventListener("click", () => {
  let from = fromTxt.value,
    fromLang = select[0].value;
  fromTxt.value = toTxt.value;
  (toTxt.value = from),
    (select[0].value = select[1].value),
    (select[1].value = fromLang);
});

fromTxt.addEventListener("keyup", () => {
  if (!fromTxt.value) {
    toTxt.value = "";
  }
});

btn.addEventListener("click", () => {
  let text = fromTxt.value.trim(),
    getTxt = select[0].value,
    toTxtTR = select[1].value;
  if (!text) return;
  toTxt.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${getTxt}|${toTxtTR}`;
  fetch(apiUrl)
    .then((response) => (response.json()))
    .then((res) => {
      toTxt.value = res.responseData.translatedText
        res.matches.forEach((match) =>{
            // if (match.id === 0){
            //     toTxt.value= match.translation
            // }
        })
    });
    toTxt.setAttribute("placeholder", "Translation");
});
