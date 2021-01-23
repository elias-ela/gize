export const localeProvider = (locale: string) => {
  return getProperty(data, locale)
}

const getProperty = <T, K extends keyof T>(o: T, propertyName: K): T[K] => {
  return o[propertyName]
}

const data: { [key: string]: { [key: string]: string[] } } = {
  en: {
    monthNames: 'September_October_November_December_January_February_March_April_May_June_July_August_Pagumen'.split(
      '_',
    ),
    dayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_',
    ),
  },
  am: {
    monthNames: 'መስከረም_ጥቅምት_ኅዳር_ታኅሳስ_ጥር_የካቲት_መጋቢት_ሚያዝያ_ግንቦት_ሰኔ_ሐምሌ_ነሐሴ_ጷጉሜን'.split(
      '_',
    ),
    dayNames: 'እሁድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ'.split('_'),
  },
  or: {
    monthNames: 'Fulbaana_Onkololeessa_Sadaasa_Muddee_Ammajjii_Guraandhala_Bitootess_Ebla_Caamsaa_Waxabajjii_Adoolessa_Hagayya_Qaammee'.split(
      '_',
    ),
    dayNames: 'Sambata_Wixata_Kibxata_Roobii_Kamisa_Jimaata_Dilbata'.split('_'),
  },
  ti: {
    monthNames: 'መስከረም_ጥቅምቲ_ሕዳር_ታሕሳስ_ጥሪ_ለካቲት_መጋቢት_ሚያዝያ_ግንቦት_ ሰነ_ሓምለ_ነሓሰ_ጷጉሜን'.split(
      '_',
    ),
    dayNames: 'ሰንበት_ሰኑይ_ሰሉስ_ረቡዕ_ሓሙስ_ዓርቢ_ቀዳም'.split('_'),
  },
  ge: {
    monthNames: 'ከረመ_ጠቀመ_ኀደረ_ኀሠሠ_ጠሐር_ከተተ_መገበ_አኀዘ_ግንባት_ሠነየ_ሐመለ_ነሐሰ_ጳጕሜን'.split(
      '_',
    ),
    dayNames: 'እሁድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ'.split('_'), // Need to change to Ge'ez
  },
  am_en: {
    monthNames: 'Meskerem_Tikemet_Hidar_Tahesas_Tir_Yekatit_Megabit_Miazia_Genbot_Sene_Hamle_Nehase_Pagume'.split(
      '_',
    ),
    dayNames: 'Ehud_Segno_Maksegno_Irob_Hamus_Arb_Kidame'.split('_'),
  },
  en_am: {
    monthNames: 'ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር_ጃንዋሪ_ፈብርዋሪ_ማርች_አፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት'.split(
      '_',
    ),
    dayNames: 'ሰንዴይ_መንዴይ_ትዩስዴይ_ዌንስዴይ_ተርሰዴይ_ፍራይዴይ_ሳተርዴይ'.split('_'),
  },
}
