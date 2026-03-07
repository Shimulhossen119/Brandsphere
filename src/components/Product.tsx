import amazonLogo from "../assets/amazon1.png";
import La from "../assets/Lal.jpg";
import LaRochePosaLipikarAP from "../assets/Lipikar ap+max1.jpg";
import Hand from "../assets/hand1.jpg";
import Title from "./Title";
import LaRochePosayHyaluB5Pure from "../assets/La Roche-Posay Hyalu B5 Pure.jpg";
import Mighty from "../assets/Mighty.jpg";
import La1 from "../assets/La1.jpg";

export default function Product() {
  return (
    <section
      id="beauty-personal-care"
      className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Title
          title="Products"
          heading="Premium & Reliable Products for Everyday Use"
          description="Expertly crafted for your everyday needs. Built to last, designed to impress. Experience the quality you truly deserve."
        />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-max">
          {/* card 1 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={LaRochePosaLipikarAP}
                alt="La Roche-Posay Lipikar AP+"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 21.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                ✨La Roche-Posay Lipikar AP+MAX Triple Repair Moisturizing Body
                Cream
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                🌿 Face & Body Lotion for Dry Skin with Shea Butter &
                Niacinamide | Gentle Moisturizer for Very Dry, Rough & Sensitive
                Skin
              </p>

              <a href="https://amzn.to/3MYyHI3" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/3MYyHI3" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product Details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={La}
                alt="Lal"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 24.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                🌿 La Roche-Posay Face Moisturizers
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                , La Roche-Posay is usually the first name mentioned. Originally
                a French pharmacy brand
              </p>

              <a href="https://amzn.to/4bmkOg1" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/4bmkOg1" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={Hand}
                alt="Lal"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 47.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Hearth & Homestead Blue Outback Balm 🐑🌿✨
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Hearth and Homestead Blue Outback Whipped Tallow Balm 🐑🌿
                Handmade with emu oil 🦤, jojoba 🌱, sandalwood 🌳, and blue
                cypress 🌲, this 1.3 oz balm delivers deep hydration 💧,
                soothing relief 🌸, and natural nourishment 🌞 for healthy,
                glowing skin. Perfect for everyday self-care ✨
              </p>

              <a href="https://amzn.to/402qsNL" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/402qsNL" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 4 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={LaRochePosayHyaluB5Pure}
                alt="La Roche-Posay Hyalu B5 Pure"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 39.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Carpe Extra Strength Men’s Antiperspirant 💪 – 100 Hour Sweat &
                Odor Control, Clean Sport Scent 🏃‍♂️
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Stay fresh, dry, and unstoppable with Carpe Underarm Deodorant
                Antiperspirant. 🚀 Engineered for men who push their limits,
                this extra‑strength formula delivers up to 100 hours of sweat
                protection while eliminating odor at the source. 🌿 Infused with
                a crisp Clean Sport scent, it keeps you feeling confident
                through workouts, long days, and high‑pressure moments. 💼
                Whether at the gym, office, or on the go, Carpe ensures you stay
                cool, comfortable, and ready to conquer. ⚡
              </p>

              <a href="https://amzn.to/40e2QGk" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/40e2QGk" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 5 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={Mighty}
                alt="Mighty"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 12.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Mighty Patch Original by Hero Cosmetics 💎 – #1 Hydrocolloid
                Acne Pimple Patch for Fast Zit & Whitehead Shrinking 🌙 (36
                Count)
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Take control of breakouts overnight with Mighty Patch Original
                from Hero Cosmetics. 🌌 These dermatologist‑loved hydrocolloid
                patches work while you sleep to visibly shrink pimples and
                whiteheads in just one use. 💧 Gentle yet powerful, they absorb
                impurities, protect from picking, and speed up healing — all
                without harsh chemicals. 🙌 With 36 discreet patches per pack,
                you’ll wake up to clearer, calmer skin and the confidence to
                face the day. 🌞
              </p>

              <a href="/" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="/" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product detailst</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* card 6 */}
          <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full sm:h-full md:h-full overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover bg-white"
                src={La1}
                alt="La Roche-Posay"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 32.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                La Roche‑Posay Cicaplast Balm B5 🌟 – Healing Ointment &
                Multi‑Purpose Soothing Cream for Dry, Irritated Skin 🤲 (Baby
                Safe, Fragrance‑Free)
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Soothe, repair, and protect with La Roche‑Posay Cicaplast Balm
                B5 — the dermatologist‑trusted healing ointment for sensitive,
                dry, and irritated skin. 💧 Enriched with Vitamin B5 and made
                fragrance‑free, this multi‑purpose cream calms discomfort while
                supporting skin’s natural recovery. 👶 Safe for babies, gentle
                for everyday use, and effective on hands, body, and delicate
                areas, it’s your go‑to balm for hydration, comfort, and skin
                barrier repair. 🌸
              </p>

              <a href="https://amzn.to/4sryKek" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Buy now at</span>
                  <span className="sm:hidden">Buy at</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
              <a href="https://amzn.to/4sryKek" className="w-full">
                <button className="w-full h-11 sm:h-12 md:h-14 px-2 mt-1.5 sm:px-3 md:px-4 py-2 border-2 border-black shadow-md bg-black hover:bg-gray-800 active:scale-95 transition-all text-white text-xs sm:text-sm md:text-base font-medium flex items-center justify-center gap-1 sm:gap-2 rounded-sm">
                  <span className="hidden sm:inline">Product details</span>
                  <span className="sm:hidden">Details</span>
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-4 sm:h-5 md:h-6 w-auto pt-2"
                  />
                </button>
              </a>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </section>
  );
}
