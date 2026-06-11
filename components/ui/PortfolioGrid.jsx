"use client";

const portfolioItems = [
  {
    id: 1,
    category: "VISITING CARDS",
    title: "Visiting Cards Project #1",
    color: "from-slate-700 via-slate-800 to-amber-700",
  },
  {
    id: 2,
    category: "PANAFLEX",
    title: "Panaflex Project #1",
    color: "from-cyan-200 via-cyan-400 to-slate-900",
  },
  {
    id: 3,
    category: "STICKERS",
    title: "Stickers Project #1",
    color: "from-pink-500 via-pink-400 to-amber-700",
  },
  {
    id: 4,
    category: "BILL BOOKS",
    title: "Bill Books Project #1",
    color: "from-slate-900 via-slate-800 to-cyan-900",
  },
  {
    id: 5,
    category: "LETTERHEAD",
    title: "Letterhead Project #1",
    color: "from-yellow-400 via-yellow-500 to-pink-300",
  },
  {
    id: 6,
    category: "T SHIRTS",
    title: "T-Shirt Project #1",
    color: "from-cyan-400 via-sky-500 to-slate-900",
  },
  {
    id: 7,
    category: "MUGS",
    title: "Mug Project #1",
    color: "from-slate-700 via-slate-800 to-yellow-700",
  },
  {
    id: 8,
    category: "ID CARDS",
    title: "ID Cards Project #1",
    color: "from-sky-200 via-cyan-300 to-slate-900",
  },
  {
    id: 9,
    category: "MEDALS",
    title: "Medal Project #1",
    color: "from-pink-500 via-pink-400 to-amber-600",
  },
  {
    id: 10,
    category: "OFFSET PRINTING",
    title: "Offset Printing Project #1",
    color: "from-slate-950 via-[#001B54] to-cyan-800",
  },
  {
    id: 11,
    category: "VISITING CARDS",
    title: "Visiting Cards Project #2",
    color: "from-yellow-400 via-yellow-500 to-pink-300",
  },
  {
    id: 12,
    category: "MUGS",
    title: "Mug Project #2",
    color: "from-cyan-400 via-sky-500 to-slate-900",
  },
];

const filters = [
  "All",
  "Visiting Cards",
  "Panaflex",
  "Stickers",
  "Bill Books",
  "Letterhead",
  "T-Shirts",
  "Mugs",
  "ID Cards",
  "Offset",
];

export default function PortfolioGrid() {
  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((item, index) => (
            <button
              key={item}
              className={`rounded-full px-4 py-2 text-xs font-medium transition
                ${
                  index === 0
                    ? "bg-[#021B52] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#021B52]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} shadow-md`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-[10px] uppercase tracking-widest text-white/70">
                  {item.category}
                </p>

                <h3 className="mt-1 text-sm font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
