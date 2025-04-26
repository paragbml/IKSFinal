"use client"

import { useState } from "react"
import { ArrowRight, Globe, Info, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [expandedSite, setExpandedSite] = useState<number | null>(null)

  const toggleSiteInfo = (index: number) => {
    if (expandedSite === index) {
      setExpandedSite(null)
    } else {
      setExpandedSite(index)
    }
  }

  const religiousSites = [
    {
      name: "Golden Temple",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/11/golden-temple-feature.jpg",
      info: "The Golden Temple, also known as Sri Harmandir Sahib, is a gurdwara located in Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism.",
      detailedInfo:
        "The Golden Temple, also known as Sri Harmandir Sahib, is a gurdwara located in Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The temple is built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. The Golden Temple is spiritually the most significant shrine in Sikhism. The temple is surrounded by a large lake, known as the Sarovar, which consists of Amrit (holy water). There are four entrances to the temple, signifying the importance of acceptance and openness.",
      threeDLink:
        "https://www.google.com/maps/@31.6198888,74.8766981,3a,75y,323.13h,92.75t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICEztqEGw!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAIMqDu0GSXFuAXEvWpmTvbhLtCd6T62ewodDxq2cv0KJe-t-TcsITpqdZZpnws7DaOWrRI-4g15Ig8i3Ara0zB2bYaB6NYB62ePMZBlyCTmtqAwtwwJIMdlpf02wYyj8_Jg27q5kC-U%3Dw900-h600-k-no-pi-2.7471614911989377-ya17.12891458967414-ro0-fo100!7i7168!8i3584?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Sikhism",
      location: "Amritsar, Punjab",
      yearBuilt: "1577",
      significance: "Most important pilgrimage site of Sikhism",
    },
    {
      name: "Basilica of Bom Jesus",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/basilica-of-bom-jesus-goa-2-musthead-hero?qlt=82&ts=1726735448817",
      info: "The Basilica of Bom Jesus is a Roman Catholic basilica located in Goa, India. It holds the mortal remains of St. Francis Xavier and is a UNESCO World Heritage Site.",
      detailedInfo:
        "The Basilica of Bom Jesus is a Roman Catholic basilica located in Goa, India. It holds the mortal remains of St. Francis Xavier and is a UNESCO World Heritage Site. The basilica is located in Old Goa, which was the capital of Goa in the early days of Portuguese rules. 'Bom Jesus' means 'Good Jesus' or 'Infant Jesus'. The Basilica of Bom Jesus is more than 408 years old and is open to the public every day. The body of St. Francis Xavier is kept in a well-decorated casket, which can be seen in the photographs below. Devotees from all over the world visit the basilica.",
      threeDLink:
        "https://www.google.com/maps/@15.5010183,73.9112237,2a,75y,99.25h,122.51t/data=!3m7!1e1!3m5!1sEHUpPdXefFRet35w_1O5YA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-32.50750543441703%26panoid%3DEHUpPdXefFRet35w_1O5YA%26yaw%3D99.24579967005437!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Christianity",
      location: "Old Goa, Goa",
      yearBuilt: "1605",
      significance: "UNESCO World Heritage Site and houses the remains of St. Francis Xavier",
    },
    {
      name: "Kashi Vishwanath Temple",
      image: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Fgallery_images%2F2021%2F12%2F13%2Ffile7isza4ot6aw9qigt9hy.jpg?format=webp&q=70&w=400&dpr=2",
      info: "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India.",
      detailedInfo:
        "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples. The main deity is known by the names Shri Vishwanath and Vishweshwara (IAST: Vishveshvara) literally meaning Lord of the Universe. The temple has been destroyed and rebuilt several times throughout history, with the current structure being built in 1780 by the Maratha ruler, Ahilya Bai Holkar of Indore.",
      threeDLink:
        "https://www.google.com/maps/@25.3108532,83.0106783,3a,75y,166.88h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgID1mP7kCw!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAIMqDu18PB35EipHpP_kpTeCztga31GkPnVjeiTNjNrezpLNBrCOFyTIwUUDuEt34Gdy4BK2X38tMASpJEKLefL2XwQvwBUxmxsPtWV0cnrTycoklgxguMGXGV4M5Rj1OyleGiBZMyy2%3Dw900-h600-k-no-pi0-ya170.87679406324258-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Hinduism",
      location: "Varanasi, Uttar Pradesh",
      yearBuilt: "Originally ancient, current structure from 1780",
      significance: "One of the twelve Jyotirlingas, the holiest Shiva temples",
    },
    {
      name: "Haji Ali Dargah",
      image: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Haji-Ali.jpg.webp?VersionId=lRdsHGsZCS0VkOhifisffqaqn6ro0MA8&itok=FEw2P2cy",
      info: "Haji Ali Dargah is a mosque and dargah located on an islet off the coast of Worli in Mumbai, India. It contains the tomb of Sayed Peer Haji Ali Shah Bukhari.",
      detailedInfo:
        "Haji Ali Dargah is a mosque and dargah (tomb) located on an islet off the coast of Worli in Mumbai, India. It contains the tomb of Sayed Peer Haji Ali Shah Bukhari. The dargah was built in 1431 in memory of a wealthy Muslim merchant who gave up all his worldly possessions before making a pilgrimage to Mecca. The structure is built on a tiny islet located 500 meters from the coast, in the middle of Worli Bay, in the vicinity of Worli. The islet is linked to the city by a narrow causeway, which is submerged during high tide. This 585-year-old structure attracts visitors from all over the world irrespective of their faith and belief.",
      threeDLink:
        "https://www.google.com/maps/@18.9825927,72.8090343,3a,75y,209.48h,90.47t/data=!3m8!1e1!3m6!1sAF1QipNTPFOqi99opbQ-wg7YEZZB-7X2jdH-s5rfqGa3!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNTPFOqi99opbQ-wg7YEZZB-7X2jdH-s5rfqGa3%3Dw900-h600-k-no-pi-0.4737148244121272-ya184.48344480661225-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Islam",
      location: "Mumbai, Maharashtra",
      yearBuilt: "1431",
      significance: "Important Islamic shrine visited by people of all faiths",
    },
    {
      name: "Global Vipassana Pagoda",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/19/88/12/global-vipassana-pagoda.jpg?w=1200&h=-1&s=1",
      info: "The Global Vipassana Pagoda is a meditation dome in Mumbai, India. It contains the world's largest stone dome built without supporting pillars and serves as a monument of peace and harmony.",
      detailedInfo:
        "The Global Vipassana Pagoda is a meditation dome in Mumbai, India. It contains the world's largest stone dome built without supporting pillars and serves as a monument of peace and harmony. The pagoda was built as a tribute to Sayagyi U Ba Khin (1899-1971), an influential Burmese Vipassana teacher and the first Accountant General of independent Burma. The pagoda's design is inspired by the Shwedagon Pagoda in Yangon, Myanmar. The purpose of the monument is to spread information about Vipassana, a meditation technique said to have been taught by the Buddha, and to house relics of the Buddha.",
      threeDLink:
        "https://www.google.com/maps/@19.2283992,72.8051851,3a,75y,141.09h,100.18t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDOus6jFw!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAIMqDu3PWTaxFaskC4pKrMirIUXAbFLUwc4LowTyOeAGxElHX2UM3W4AO0INoevqTNZ9dSVr54XKleh1lnMLC8nKnZRDvoFuSIGdretyMAGwfcgnL8C2LSBn_np12MhCTsPhh1-uNlcX%3Dw900-h600-k-no-pi-10.182176418203369-ya26.085627716700742-ro0-fo100!7i10240!8i5120?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Buddhism",
      location: "Mumbai, Maharashtra",
      yearBuilt: "2008",
      significance: "World's largest stone dome built without supporting pillars",
    },
    {
      name: "Dhamek Stupa",
      image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1702021011_dhamek_stupa.jpg.webp",
      info: "Dhamek Stupa is a massive stupa located at Sarnath, 13 km away from Varanasi in Uttar Pradesh, India. It marks the spot where Buddha gave his first sermon to his five disciples after attaining enlightenment.",
      detailedInfo:
        "Dhamek Stupa is a massive stupa located at Sarnath, 13 km away from Varanasi in Uttar Pradesh, India. It marks the spot where Buddha gave his first sermon to his five disciples after attaining enlightenment. The stupa was built in 500 CE to replace an earlier structure commissioned by Emperor Ashoka in 249 BCE. The stupa is 43.6 meters tall and 28 meters in diameter. The basement seems to have survived from Ashoka's structure, whose plinth decorated with sculpted human figures and animals is partially preserved. The wall is covered with delicately carved figures of humans and birds, as well as inscriptions in the Brahmi script.",
      threeDLink:
        "https://www.google.com/maps/@25.3808964,83.0243921,3a,75y,114.24h,101.92t/data=!3m8!1e1!3m6!1sAF1QipMcotttIleq9J0azquWSIZFkb4XpyGW-mPWJHQ!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMcotttIleq9J0azquWSIZFkb4XpyGW-mPWJHQ%3Dw900-h600-k-no-pi-11.919949932586135-ya114.23638428286365-ro0-fo100!7i8000!8i4000?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Buddhism",
      location: "Sarnath, Uttar Pradesh",
      yearBuilt: "500 CE",
      significance: "Site where Buddha gave his first sermon after enlightenment",
    },
    {
      name: "Mount Mary Church",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/mount-mary-church-mumbai-maharashtra-2-attr-hero?qlt=82&ts=1727355270494",
      info: "Mount Mary Church, officially known as the Basilica of Our Lady of the Mount, is a Roman Catholic Basilica located in Bandra, Mumbai. The church is one of the most visited churches in India.",
      detailedInfo:
        "Mount Mary Church, officially known as the Basilica of Our Lady of the Mount, is a Roman Catholic Basilica located in Bandra, Mumbai. The church is one of the most visited churches in India. The church stands on a hillock about 80 meters above sea level overlooking the Arabian Sea. It draws lakhs of devotees and pilgrims annually. Many faithful attest to the miraculous powers of the statue of Mother Mary enshrined within. During the annual feast of the Blessed Virgin Mary, which is celebrated on the first Sunday after September 8, the birthday of the Virgin Mary, pilgrims from all faiths visit the church to pray and offer their thanksgiving.",
      threeDLink:
        "https://www.google.com/maps/@19.0465562,72.8223263,3a,75y,84.64h,93.53t/data=!3m8!1e1!3m6!1sAF1QipNWBdThceYi_-tfiU-b2LdhGNMtxWbyIFV5aH-O!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNWBdThceYi_-tfiU-b2LdhGNMtxWbyIFV5aH-O%3Dw900-h600-k-no-pi-3.5305935133282844-ya359.638781076357-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Christianity",
      location: "Bandra, Mumbai",
      yearBuilt: "16th century, rebuilt in 1760",
      significance: "Important Marian pilgrimage site visited by people of all faiths",
    },
    {
      name: "Ajmer Sharif Dargah",
      image: "https://images.nativeplanet.com/hi/img/2022/06/untitleddesign15-1655143651.jpg",
      info: "Ajmer Sharif Dargah is a sufi shrine of the revered sufi saint, Moinuddin Chishti, located at Ajmer, Rajasthan, India. The shrine has Mughal architecture and is visited by people of all faiths.",
      detailedInfo:
        "Ajmer Sharif Dargah is a sufi shrine of the revered sufi saint, Moinuddin Chishti, located at Ajmer, Rajasthan, India. The shrine has Mughal architecture and is visited by people of all faiths. The shrine has the grave (Maqbara) of the revered saint, Moinuddin Chishti, who came to Ajmer from Persia in 1192 and died in Ajmer in 1236. The shrine is known as 'Dargah Sharif' or 'Ajmer Sharif' and is an international waqf (an Islamic mortmain managed by the Dargah Committee). The shrine is visited by millions of people every year, irrespective of their religion, to seek blessings from the Sufi saint.",
      threeDLink:
        "https://www.google.com/maps/@26.4561878,74.628106,3a,75y,347.97h,98.77t/data=!3m8!1e1!3m6!1sAF1QipMMs2Ryllmx8pfry4i3h6Z3ZZvfDLOqkQR9-Sdv!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMMs2Ryllmx8pfry4i3h6Z3ZZvfDLOqkQR9-Sdv%3Dw900-h600-k-no-pi-8.769415973183072-ya347.96555682197516-ro0-fo100!7i5376!8i2688?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
      religion: "Islam",
      location: "Ajmer, Rajasthan",
      yearBuilt: "13th century",
      significance: "One of the most important Sufi shrines in India",
    },
  ]

  const teamMembers = [
    "10837 Parag Bomble",
    "10850 Arya Dixit",
    "10851 Cyd Dsouza",
    "10843 Royson Colaco",
    "10832 Aaron Sudesan",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Religious Harmony
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#sites" className="text-gray-700 hover:text-purple-600 transition-colors">
              Religious Sites
            </a>
            <a href="#team" className="text-gray-700 hover:text-purple-600 transition-colors">
              Team
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/30 p-6 md:p-10 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Celebrating India's Religious Diversity
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Explore the beautiful religious sites across India that showcase our rich cultural heritage and promote
              harmony among different faiths.
            </p>
            <a
              href="#sites"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Explore Sites
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Religious Sites Section */}
      <section id="sites" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sacred Places of Worship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religiousSites.map((site, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-white/40 rounded-xl border border-white/20 shadow-lg overflow-hidden transition-all duration-300 ${
                  expandedSite === index ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={site.image || "/placeholder.svg"} alt={site.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {site.religion}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{site.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {expandedSite === index ? site.detailedInfo : site.info}
                  </p>

                  {expandedSite === index && (
                    <div className="grid md:grid-cols-3 gap-4 mb-6 animate-fadeIn">
                      <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg border border-white/20">
                        <h4 className="font-medium text-gray-700 mb-1 text-sm">Location</h4>
                        <p className="text-gray-900 text-sm">{site.location}</p>
                      </div>
                      <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg border border-white/20">
                        <h4 className="font-medium text-gray-700 mb-1 text-sm">Year Built</h4>
                        <p className="text-gray-900 text-sm">{site.yearBuilt}</p>
                      </div>
                      <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg border border-white/20">
                        <h4 className="font-medium text-gray-700 mb-1 text-sm">Significance</h4>
                        <p className="text-gray-900 text-sm">{site.significance}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={site.threeDLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                    >
                      <Globe size={16} />
                      3D View
                    </Link>
                    <button
                      onClick={() => toggleSiteInfo(index)}
                      className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                    >
                      {expandedSite === index ? (
                        <>
                          <X size={16} />
                          Close
                        </>
                      ) : (
                        <>
                          <Info size={16} />
                          More Info
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/30 p-6 md:p-10 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Team
            </h2>
            <ul className="space-y-4">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className="backdrop-blur-lg bg-white/50 p-4 rounded-lg border border-white/20 shadow-sm text-center font-medium text-gray-700"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 backdrop-blur-lg bg-white/30 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Religious Harmony | College Project</p>
          <p className="text-gray-500 text-sm mt-2">Celebrating the diversity of religious sites across India</p>
        </div>
      </footer>
    </div>
  )
}
