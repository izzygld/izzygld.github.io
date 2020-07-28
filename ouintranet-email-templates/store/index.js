import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      new: false,
      products: [
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
          name: 'Yachad L’Olam',
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
        }, {
          name: 'Rabbi Weinrebs',
          usage: 59.99,
          category: 'RabbiWienrebs',
          new: false,
          article: 'jacket',
          img: 'rabbi-wienberbs.png'
        }, {
          name: 'Barych Dayan Haemet',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'baruch-dayan-emet.png'
        }, {
          name: 'OU Employee News',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'ou-employee-news.png'
        }, {
          name: 'Open Positions',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'open-positions.png'
        }, {
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
      ]
    },
    getters: {
      OUTorah: state => filter(state.products, 'category', 'OUTorah'),
      shabbatshalom: state => filter(state.products, 'category', 'shabbatshalom'),
      OuPress: state => filter(state.products, 'category', 'OuPress'),
      OuJob: state => filter(state.products, 'category', 'OuJob'),
      Community: state => filter(state.products, 'category', 'Community'),
      Yachad: state => filter(state.products, 'category', 'Yachad'),
      NCSY: state => filter(state.products, 'category', 'NCSY'),
      Kosher: state => filter(state.products, 'category', 'Kosher'),
      IPA: state => filter(state.products, 'category', 'IPA'),
      JewishAction: state => filter(state.products, 'category', 'JewishAction'),
      ifs: state => filter(state.products, 'category', 'ifs'),
      BoardAlerts: state => filter(state.products, 'category', 'BoardAlerts'),
      OUIsrael: state => filter(state.products, 'category', 'OUIsrael'),
      RabbiWienrebs: state => filter(state.products, 'category', 'RabbiWienrebs'),
      OUGeneral: state => filter(state.products, 'category', 'OUGeneral'),
      TeamYachad: state => filter(state.products, 'category', 'TeamYachad'),
      ArnoldGerson: state => filter(state.products, 'category', 'ArnoldGerson'),
      NextGen: state => filter(state.products, 'category', 'NextGen'),
      men: state => filter(state.products, 'category', 'men'),
      new: state => filter(state.products, 'new', true),
      all: state => filter(state.products)
    },
    mutations: {
      switchnew: state => {
        state.new = !state.new
      },
      clearCartCount: state => {
        state.cartTotal = 0
      },
      clearCartContents: state => {
        state.cart = {}
      },
      addItem: (state, item) => {
        state.cartTotal++
        if (item.name in state.cart) {
          state.cart[item.name].count++
        } else {
          let stateItem = Object.assign({}, item)
          stateItem.count = 1
          state.cart[item.name] = stateItem
        }
      }
    }
  })
}

export default createStore

// helper
const filter = (array, key, value) => array.filter(item => item[key] === value)
