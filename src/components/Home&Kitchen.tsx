import amazonLogo from "../assets/amazon1.png";
import Saferest from "../assets/Saferest.jpg";
import Title from "./Title";
import Mellanni from "../assets/Mellanni.jpg";
import Zulay from "../assets/Zulay.jpg";
import Snow from "../assets/Snow.jpg";
import Airtight from "../assets/Airtight.jpg";

export default function HomeAndKitchen() {
  return (
    <section
      id="home-kitchen"
      className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Title
          title="Home & Kitchen"
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
                src={Mellanni}
                alt="Mellanni"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 59.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Mellanni Twin XL Sheets Set – Iconic Collection Hotel Luxury 🏨
                Extra Soft & Cooling Bed Sheets ❄️ Wrinkle, Fade & Stain
                Resistant (White, Pack of 2, 3‑Piece Set)
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Upgrade your sleep with the Mellanni Twin XL Sheets Set, part of
                the Iconic Collection trusted by millions. 🌟 Crafted for
                hotel‑quality comfort, these sheets are extra soft, breathable,
                and cooling to keep you comfortable all night long. ❄️ Designed
                to resist wrinkles, fading, and stains, they stay looking fresh
                and crisp wash after wash. 🧺 Perfect for dorms, guest rooms, or
                everyday luxury, this 3‑piece set includes a fitted sheet, flat
                sheet, and pillowcase — all in a timeless white finish. 🤍 With
                a convenient Pack of 2, you’ll always have a fresh set ready for
                dreamy nights. 🌙
              </p>

              <a href="https://amzn.to/3OsEJkx" className="w-full">
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
              <a href="https://amzn.to/3OsEJkx" className="w-full">
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
                src={Saferest}
                alt="Saferest"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 22.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                SafeRest Waterproof Mattress Protector – Twin Size 🌙 Absorbent,
                Breathable & Soft Bed Cover 🧼 18" Deep Stretch Pockets, Machine
                Washable
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Protect your mattress and upgrade your sleep with the SafeRest
                Waterproof Mattress Protector. 💧 Designed with a soft,
                breathable surface, it keeps you comfortable while shielding
                against spills, sweat, and allergens. 🌿 The absorbent fitted
                cover features 18" deep stretchable pockets for a secure fit on
                any Twin mattress. 🛏️ Machine washable and durable, it resists
                everyday wear while maintaining freshness. Perfect for kids,
                adults, and dorms, SafeRest ensures a cleaner, healthier sleep
                environment night after night. 🌙
              </p>

              <a href="https://amzn.to/4r1HSWc" className="w-full">
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
              <a href="https://amzn.to/4r1HSWc" className="w-full">
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
                src={Zulay}
                alt="Zulay"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 12.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Zulay Kitchen Double Whisk Milk Frother ⚡ – Handheld Foam Maker
                for Coffee, Lattes, Matcha, Hot Chocolate & Cappuccinos 🍵
                Portable & Easy to Use
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Whip up café‑style drinks at home in seconds with the Zulay
                Kitchen Double Whisk Milk Frother. 🌟 This powerful handheld
                foam maker creates rich, creamy froth for coffee, lattes,
                cappuccinos, matcha, and hot chocolate — all with effortless
                ease. 💨 Its double whisk design delivers faster, smoother
                results, while the lightweight, portable build makes it perfect
                for home, office, or travel. 🏠✈️ Easy to clean and simple to
                use, it’s the ultimate tool for elevating your daily drinks into
                barista‑quality indulgence. ☕🍫
              </p>

              <a href="https://amzn.to/4aNpudi" className="w-full">
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
              <a href="https://amzn.to/4aNpudi" className="w-full">
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
                src={Snow}
                alt="Snow"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 44.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Snow Joe Eco Melt Premium Ice Melt 🐾 – Pet‑Safe, Fast‑Acting,
                Concrete‑Safe Deicer with Liquid Heat ⚡ Works to ‑25°F
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Keep walkways safe and clear this winter with Snow Joe Eco Melt
                Premium Ice Melt. 🌨️ Specially formulated to be pet‑safe 🐶🐱
                and concrete‑safe, this powerful deicer works fast to melt ice
                and snow down to ‑25°F. ❄️ Enhanced with Liquid Heat technology,
                it delivers rapid results while reducing tracking indoors. 🚪
                Perfect for driveways, sidewalks, and patios, Eco Melt provides
                peace of mind by protecting your loved ones, pets, and property
                — all while keeping surfaces slip‑free and safe. 🏡
              </p>

              <a href="https://amzn.to/3MXx2lS" className="w-full">
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
              <a href="https://amzn.to/3MXx2lS" className="w-full">
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
                src={Airtight}
                alt="Airtight"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
                $ 29.00
              </p>

              <p className="text-slate-800 text-sm sm:text-base font-medium mb-2 line-clamp-2">
                Vtopmart Airtight Food Storage Containers – 24 Pc Kitchen &
                Pantry Organization Set 🏠 BPA‑Free Plastic Canisters with Lids,
                Labels Included ✨ (Cereal, Flour, Sugar, Dry Food – Black)
              </p>

              <p className="text-slate-500 text-xs sm:text-sm grow line-clamp-3 mb-4">
                Transform your pantry into a neatly organized space with
                Vtopmart Airtight Food Storage Containers. 🌟 This 24‑piece set
                includes durable, BPA‑free plastic canisters with secure lids to
                keep cereal, flour, sugar, and dry foods fresh longer. 🍚🥣
                Designed with a sleek black finish, these containers are both
                practical and stylish, helping you maximize space while
                maintaining a clean, modern look. 🖤 Each set comes with 24
                reusable labels for easy identification, making meal prep and
                kitchen organization effortless. 🏡 Perfect for families, dorms,
                or anyone who loves a clutter‑free kitchen.
              </p>

              <a href="https://amzn.to/46iC03k" className="w-full">
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
              <a href="https://amzn.to/46iC03k" className="w-full">
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

          {/* card end */}
        </div>
      </div>
    </section>
  );
}
