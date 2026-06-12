"use client";

const portfolioItems = [
  {
    id: 1,
    category: "VISITING CARDS",
    title: "Visiting Cards Project #1",
    color: "from-[#033C2D] via-[#064635] to-[#BD9541]",
  },
  {
    id: 2,
    category: "PANAFLEX",
    title: "Panaflex Project #1",
    color: "from-[#E2ECE7] via-[#BD9541] to-[#033C2D]",
  },
  {
    id: 3,
    category: "STICKERS",
    title: "Stickers Project #1",
    color: "from-[#BD9541] via-[#D6B36A] to-[#033C2D]",
  },
  {
    id: 4,
    category: "BILL BOOKS",
    title: "Bill Books Project #1",
    color: "from-[#1F2429] via-[#033C2D] to-[#064635]",
  },
  {
    id: 5,
    category: "LETTERHEAD",
    title: "Letterhead Project #1",
    color: "from-[#D6B36A] via-[#BD9541] to-[#F3E9D7]",
  },
  {
    id: 6,
    category: "T SHIRTS",
    title: "T-Shirt Project #1",
    color: "from-[#064635] via-[#BD9541] to-[#1F2429]",
  },
  {
    id: 7,
    category: "MUGS",
    title: "Mug Project #1",
    color: "from-[#033C2D] via-[#1F2429] to-[#BD9541]",
  },
  {
    id: 8,
    category: "ID CARDS",
    title: "ID Cards Project #1",
    color: "from-[#E2ECE7] via-[#D6B36A] to-[#033C2D]",
  },
  {
    id: 9,
    category: "MEDALS",
    title: "Medal Project #1",
    color: "from-[#BD9541] via-[#F3E9D7] to-[#064635]",
  },
  {
    id: 10,
    category: "OFFSET PRINTING",
    title: "Offset Printing Project #1",
    color: "from-[#1F2429] via-[#033C2D] to-[#BD9541]",
  },
  {
    id: 11,
    category: "VISITING CARDS",
    title: "Visiting Cards Project #2",
    color: "from-[#D6B36A] via-[#BD9541] to-[#F3E9D7]",
  },
  {
    id: 12,
    category: "MUGS",
    title: "Mug Project #2",
    color: "from-[#064635] via-[#BD9541] to-[#1F2429]",
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
    <section className="bg-[#F7F8F5] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((item, index) => (
            <button
              key={item}
              className={`rounded-full px-4 py-2 text-xs font-medium transition
                ${
                  index === 0
                    ? "bg-[#033C2D] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#033C2D]"
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
