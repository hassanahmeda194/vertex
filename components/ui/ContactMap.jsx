export default function ContactMap() {
  return (
    <section className="bg-[#F7F8F5] pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[30px] border shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=karachi&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
