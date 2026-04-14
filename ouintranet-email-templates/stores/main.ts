import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Helper function
const filter = (array: any[], key: string, value?: any) => {
  if (value === undefined) {
    return array
  }
  return array.filter(item => item[key] === value)
}

export const useMainStore = defineStore('main', () => {
  // State
  const cartTotal = ref(0)
  const cart = ref<Record<string, any>>({})
  const newFilter = ref(false)
  
  const products = ref([

        {
      name: 'Ohrbit Newsletter',
      usage: 200,
      category: 'OUGeneral',
      new: true,
      article: 'Ohrbit AI Newsletter 2026',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/v1776169960/screencapture-ouintranet-org-newsletters-ou-newsletter-heard-in-the-baigel-store-november-edition-2026-04-14-15_32_21_jwnud0.png'
    },
        {
      name: 'Communal Engagement',
      usage: 200,
      category: 'OUGeneral',
      new: true,
      article: 'Communal Engagement Newsletter 2026',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/v1776170133/screencapture-ouintranet-org-newsletters-2026-04-14-15_35_22_qjrbxi.png'
    },
    {
      name: 'Vote',
      usage: 200,
      category: 'OUGeneral',
      new: true,
      article: 'Vote Newsletter 2026',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/v1776170259/screencapture-ouintranet-org-newsletters-ou-newsletter-vote-2026-04-14-15_36_54_gakxfl.png'
    },   

    {
      name: 'Shabbat Shalom 2025',
      usage: 200,
      category: 'shabbatshalom',
      new: true,
      article: 'Shabbat Shalom 2025',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/v1776170327/screencapture-ouintranet-org-newsletters-shsh-newsletter-shsh-tzav-5786-2026-04-14-15_38_27_ruoia3.png'
    },   
      {
      name: 'OU Nach Yomi',
      usage: 149.99,
      category: 'OUTorah',
      new: true,
      article: 'OU Nach Yomi',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/v1776170348/screencapture-ouintranet-org-newsletters-torah-newsletter-shmuel-alef-22-3-2026-04-14-15_38_56_yr286a.png'
    },  
    
    {
      name: 'Yachad Reach',
      usage: 149.99,
      category: 'Yachad',
      new: true,
      article: 'Yachad Reach 2021',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1623650507/teachcoalition/screencapture-file-Users-izzygld-Desktop-test-copy-html-2021-06-14-08_54_27.png'
    },
    {
      name: 'Teach Newsletter',
      usage: 149.99,
      category: 'IPA',
      new: true,
      article: 'Teach Newsletter 2020',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1606226358/teachcoalition/email/screencapture-ouintranet-org-newsletters-ipa-newsletter-teach-newsletter-november-2020-11-24-15_55_50.png'
    },
    {
      name: 'DOU Kosher Direct',
      usage: 59.99,
      category: 'Kosher',
      new: false,
      article: 'direct',
      img: 'https://res.cloudinary.com/ncsy/image/upload/f_auto,q_auto/v1603013966/westcoast/screencapture-ouintranet-org-newsletters-kosher-newsletter-kosher-newsletter-2020-10-18-12_38_50.png'
    },
    {
      name: 'Westcoast',
      usage: 149.99,
      category: 'NCSY',
      new: false,
      article: 'Westcoast',
      img: 'https://res.cloudinary.com/ncsy/image/upload/f_auto,q_auto/v1603013801/westcoast/screencapture-ouintranet-org-newsletters-westcoast-newsletter-westcoast-new-test-2020-10-18-12_36_25.png'
    },
    {
      name: 'Yachad Communal Engagement',
      usage: 149.99,
      category: 'Yachad',
      new: true,
      article: 'Yachad Communal Engagement',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1599464524/Teamyachad/yachad-engagement4.jpg'
    },
    {
      name: 'OU Academy Training',
      usage: 149.99,
      category: 'OUGeneral',
      new: true,
      article: 'OU Academy',
      img: 'ou-newsletter-academy-training-july-2020-2020-07-28-14_15_46.png'
    },
    {
      name: 'OU Today V2',
      usage: 200,
      category: 'OUGeneral',
      new: true,
      article: 'OU Today',
      img: 'outoday-v2-2020-07-28-14_15_21.png'
    },
    {
      name: 'Mishna Yomit',
      usage: 149.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'ou_torah_mishna_yomit.png'
    },
    {
      name: 'Yachad Ivdu',
      usage: 149.99,
      category: 'Yachad',
      new: true,
      article: 'Yachad Ivdu 2021',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1613655557/Torah/email/screencapture-ouintranet-org-newsletters-yachad-newsletter-ivdu-test-2021-02-18-15_26_26.png'
    },
    {
      name: 'Yachad Communal',
      usage: 149.99,
      category: 'Yachad',
      new: true,
      article: 'Yachad Communal 2021',
      img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1613655563/Torah/email/screencapture-ouintranet-org-newsletters-yachad-newsletter-copy-2021-02-18-15_26_04.png'
    },
    {
      name: 'Hashoneh Halachot',
      usage: 28.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'hashoneh-halachot.png'
    },
    {
      name: 'HaShoneh Halachos 2: Mishneh Torah',
      usage: 39.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'mishna-halachat-2.png'
    },
    {
      name: 'Torah Weekly',
      usage: 49.99,
      category: 'OUTorah',
      new: true,
      article: 'OU Torah',
      img: 'torah-weekly.png'
    },
    {
      name: 'Shnayim Mikrah',
      usage: 12.99,
      category: 'OUTorah',
      new: true,
      article: 'OU Torah',
      img: 'shnayim-mikrah.png'
    },
    {
      name: 'Sefirah',
      usage: 29.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'sefirah.png'
    },
    {
      name: 'One By One',
      usage: 18.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'one-by-one.png'
    },
    {
      name: 'Torah Weekly',
      usage: 49.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'torah_weekly.png'
    },
    {
      name: 'Taryag',
      usage: 129.99,
      category: 'OUTorah',
      new: false,
      article: 'OU Torah',
      img: 'taryag.png'
    },
    {
      name: 'Shabbat Shalom',
      usage: 59.99,
      category: 'shabbatshalom',
      new: false,
      article: 'Shabbat Shalom',
      img: 'shabbatshalom.png'
    },
    {
      name: 'Shabbat Shalom 2020',
      usage: 200,
      category: 'shabbatshalom',
      new: true,
      article: 'Shabbat Shalom',
      img: 'shabbatshalomv2.png'
    },
    {
      name: 'OU Press new',
      usage: 80.99,
      category: 'OuPress',
      new: true,
      article: 'jacket',
      img: 'oupress-new.png'
    },
    {
      name: 'OU Press Sale',
      usage: 80.99,
      category: 'OuPress',
      new: false,
      article: 'jacket',
      img: 'oupress-sale.png'
    },
    {
      name: 'OU Press News',
      usage: 59.99,
      category: 'OuPress',
      new: true,
      article: 'jacket',
      img: 'ou-press-news.png'
    },
    {
      name: 'OU Press Blank',
      usage: 59.99,
      category: 'OuPress',
      new: true,
      article: 'jacket',
      img: 'ou-press-blank.png'
    },
    {
      name: 'Job News',
      usage: 59.99,
      category: 'OuJob',
      new: true,
      article: 'jacket',
      img: 'ou-jobs-news.png'
    },
    {
      name: 'Job Events',
      usage: 59.99,
      category: 'OuJob',
      new: true,
      article: 'jacket',
      img: 'ou-jobs-events.png'
    },
    {
      name: 'Community Events',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'community-events.png'
    },
    {
      name: 'Speakers Bureau',
      usage: 59.99,
      category: 'Community',
      new: false,
      article: 'jacket',
      img: 'community_newsletter-ous-speakers-bureau.png'
    },
    {
      name: 'Community Fair',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'community-fair.png'
    },
    {
      name: 'Community Letter',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'community-letter.png'
    },
    {
      name: 'Community Tefillah Tips',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'community-tefillah-tips.png'
    },
    {
      name: 'Synagogue & Community Services Activities',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'synagogue-community-services-activities.png'
    },
    {
      name: 'Youth Professionals Letter',
      usage: 59.99,
      category: 'Community',
      new: true,
      article: 'jacket',
      img: 'youth-professionals-letter.png'
    },
    {
      name: 'Yachad Advisor',
      usage: 59.99,
      category: 'Yachad',
      new: true,
      article: 'jacket',
      img: 'advisor.png'
    },
    {
      name: 'Yachad Advisor Updated',
      usage: 59.99,
      category: 'Yachad',
      new: true,
      article: 'jacket',
      img: 'yachad-advisor.png'
    },
    {
      name: 'JUF Newsletter',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'juf-newsletter.png'
    },
    {
      name: 'Our Way',
      usage: 59.99,
      category: 'Yachad',
      new: true,
      article: 'jacket',
      img: 'our-way.png'
    },
    {
      name: 'Shabbat Shalom',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'shabbat-shalom.png'
    },
    {
      name: 'Team Yachad',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'team-yachad.png'
    },
    {
      name: 'Weekly newsletter',
      usage: 59.99,
      category: 'Yachad',
      new: true,
      article: 'jacket',
      img: 'weekly-newsletter.png'
    },
    {
      name: 'Yachad Gifts',
      usage: 59.99,
      category: 'Yachad',
      new: true,
      article: 'jacket',
      img: 'yachad-gifts.png'
    },
    {
      name: 'Yachad L\'Olam',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'yachad-lolam.png'
    },
    {
      name: 'Yachad Monthly Calendar',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'yachad-monthly-calendar.png'
    },
    {
      name: 'Yachad Template',
      usage: 59.99,
      category: 'Yachad',
      new: false,
      article: 'jacket',
      img: 'yachad-template.png'
    },
    {
      name: 'FTDO Rabbi Micha Greenland',
      usage: 59.99,
      category: 'NCSY',
      new: false,
      article: 'jacket',
      img: 'ftdo.png'
    },
    {
      name: 'Leadership Development Roundup',
      usage: 59.99,
      category: 'NCSY',
      new: false,
      article: 'jacket',
      img: 'regional-roundup.png'
    },
    {
      name: 'NCSY Header, text and video',
      usage: 59.99,
      category: 'NCSY',
      new: false,
      article: 'jacket',
      img: 'ncsy-header.png'
    },
    {
      name: 'NCSY Summer',
      usage: 59.99,
      category: 'NCSY',
      new: false,
      article: 'jacket',
      img: 'ncsy-summer.png'
    },
    {
      name: 'Daily Halacha',
      usage: 59.99,
      category: 'Kosher',
      new: false,
      article: 'jacket',
      img: 'daily-halacha.png'
    },
    {
      name: 'Kosher Alerts',
      usage: 59.99,
      category: 'Kosher',
      new: false,
      article: 'jacket',
      img: 'kosher-alerts.png'
    },
    {
      name: 'Alumni Weekly',
      usage: 59.99,
      category: 'Alumni',
      new: false,
      article: 'jacket',
      img: 'alumni-weekly.png'
    },
    {
      name: 'Full header image',
      usage: 59.99,
      category: 'IPA',
      new: false,
      article: 'jacket',
      img: 'fullheader-image.png'
    },
    {
      name: 'TeachNYS Newsletter',
      usage: 59.99,
      category: 'IPA',
      new: false,
      article: 'jacket',
      img: 'Teachnys-newsletter.png'
    },
    {
      name: 'OUAdvocacy Newsletter',
      usage: 59.99,
      category: 'IPA',
      new: false,
      article: 'jacket',
      img: 'Teachnys-partner.png'
    },
    {
      name: 'Jewish Action',
      usage: 59.99,
      category: 'JewishAction',
      new: false,
      article: 'jacket',
      img: 'ja.png'
    },
    {
      name: 'Jewish Action 2020',
      usage: 59.99,
      category: 'JewishAction',
      new: true,
      article: 'jacket',
      img: 'jewishaction2020.png'
    },
    {
      name: 'Israel Free Spirit',
      usage: 59.99,
      category: 'ifs',
      new: false,
      article: 'jacket',
      img: 'ifs.png'
    },
    {
      name: 'Staff Education Newsletter',
      usage: 59.99,
      category: 'StaffEducation',
      new: false,
      article: 'jacket',
      img: 'staff-education.png'
    },
    {
      name: 'Board Alerts',
      usage: 59.99,
      category: 'BoardAlerts',
      new: false,
      article: 'jacket',
      img: 'board-alerts.png'
    },
    {
      name: 'Board Weekly',
      usage: 59.99,
      category: 'BoardAlerts',
      new: false,
      article: 'jacket',
      img: 'board-weekly.png'
    },
    {
      name: 'OU Insider',
      usage: 59.99,
      category: 'BoardAlerts',
      new: false,
      article: 'jacket',
      img: 'ou-insider.png'
    },
    {
      name: 'Synagogue & Community Services',
      usage: 59.99,
      category: 'BoardAlerts',
      new: false,
      article: 'jacket',
      img: 'SynagoguesCommunityservice.png'
    },
    {
      name: 'OU Israel – Layla',
      usage: 59.99,
      category: 'OUIsrael',
      new: false,
      article: 'jacket',
      img: 'ou-israel-layla.png'
    },
    {
      name: 'OU Israel – General',
      usage: 59.99,
      category: 'OUIsrael',
      new: false,
      article: 'jacket',
      img: 'OUisrael-geeneral.png'
    },
    {
      name: 'Rabbi Weinrebs',
      usage: 59.99,
      category: 'RabbiWienrebs',
      new: false,
      article: 'jacket',
      img: 'rabbi-wienberbs.png'
    },
    {
      name: 'Barych Dayan Haemet',
      usage: 59.99,
      category: 'OUGeneral',
      new: false,
      article: 'jacket',
      img: 'baruch-dayan-emet.png'
    },
    {
      name: 'OU Employee News',
      usage: 59.99,
      category: 'OUGeneral',
      new: false,
      article: 'jacket',
      img: 'ou-employee-news.png'
    },
    {
      name: 'Open Positions',
      usage: 59.99,
      category: 'OUGeneral',
      new: false,
      article: 'jacket',
      img: 'open-positions.png'
    },
    {
      name: 'Team Yachad Calendar',
      usage: 59.99,
      category: 'TeamYachad',
      new: false,
      article: 'jacket',
      img: 'team-yachad-calendar.png'
    },
    {
      name: 'Arnold- Gerson',
      usage: 59.99,
      category: 'ArnoldGerson',
      new: false,
      article: 'jacket',
      img: 'arnold-gerson.png'
    },
    {
      name: 'NextGen',
      usage: 59.99,
      category: 'NextGen',
      new: false,
      article: 'jacket',
      img: 'nextgen.png'
    }
  ])

  // Getters
  const OUTorah = computed(() => filter(products.value, 'category', 'OUTorah'))
  const shabbatshalom = computed(() => filter(products.value, 'category', 'shabbatshalom'))
  const OuPress = computed(() => filter(products.value, 'category', 'OuPress'))
  const OuJob = computed(() => filter(products.value, 'category', 'OuJob'))
  const Community = computed(() => filter(products.value, 'category', 'Community'))
  const Yachad = computed(() => filter(products.value, 'category', 'Yachad'))
  const NCSY = computed(() => filter(products.value, 'category', 'NCSY'))
  const Kosher = computed(() => filter(products.value, 'category', 'Kosher'))
  const IPA = computed(() => filter(products.value, 'category', 'IPA'))
  const JewishAction = computed(() => filter(products.value, 'category', 'JewishAction'))
  const ifs = computed(() => filter(products.value, 'category', 'ifs'))
  const BoardAlerts = computed(() => filter(products.value, 'category', 'BoardAlerts'))
  const OUIsrael = computed(() => filter(products.value, 'category', 'OUIsrael'))
  const RabbiWienrebs = computed(() => filter(products.value, 'category', 'RabbiWienrebs'))
  const OUGeneral = computed(() => filter(products.value, 'category', 'OUGeneral'))
  const TeamYachad = computed(() => filter(products.value, 'category', 'TeamYachad'))
  const ArnoldGerson = computed(() => filter(products.value, 'category', 'ArnoldGerson'))
  const NextGen = computed(() => filter(products.value, 'category', 'NextGen'))
  const men = computed(() => filter(products.value, 'category', 'men'))
  const newProducts = computed(() => filter(products.value, 'new', true))
  const all = computed(() => filter(products.value))

  // Actions
  const switchNew = () => {
    newFilter.value = !newFilter.value
  }

  const clearCartCount = () => {
    cartTotal.value = 0
  }

  const clearCartContents = () => {
    cart.value = {}
  }

  const addItem = (item: any) => {
    cartTotal.value++
    if (item.name in cart.value) {
      cart.value[item.name].count++
    } else {
      let stateItem = Object.assign({}, item)
      stateItem.count = 1
      cart.value[item.name] = stateItem
    }
  }

  return {
    // State
    cartTotal,
    cart,
    newFilter,
    products,
    // Getters
    OUTorah,
    shabbatshalom,
    OuPress,
    OuJob,
    Community,
    Yachad,
    NCSY,
    Kosher,
    IPA,
    JewishAction,
    ifs,
    BoardAlerts,
    OUIsrael,
    RabbiWienrebs,
    OUGeneral,
    TeamYachad,
    ArnoldGerson,
    NextGen,
    men,
    newProducts,
    all,
    // Actions
    switchNew,
    clearCartCount,
    clearCartContents,
    addItem
  }
})
