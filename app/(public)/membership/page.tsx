import Link from "next/link";

export default function MembershipPage() {
  const items = ["Why Join KUHRSA?", "Membership Benefits", "Eligibility", "Membership Categories", "How to Join", "Membership Requirements", "Member Responsibilities"];
  return (
    <>
      <section className="bg-[#168DB8] text-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Membership</p><h1 className="mt-3 text-5xl font-black">Find your place in KUHRSA.</h1><p className="mt-5 max-w-2xl text-lg text-white/90">Public membership information, without exposing private fee or account details.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{items.map((item) => <Link href="/membership" key={item} className="rounded-3xl bg-[#BFF2F8] p-6"><h2 className="font-black text-xl">{item}</h2><p className="mt-3 text-sm text-black/60">Membership content placeholder.</p><span className="mt-5 inline-block font-bold text-[#168DB8]">Explore →</span></Link>)}</div>
      <div id="join" className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10"><h2 className="text-3xl font-black">Ready to join?</h2><p className="mt-3 max-w-2xl text-black/60">The join/application process will connect this public site to the membership workflow.</p><button className="mt-6 rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white">Join KUHRSA</button></div>
      <div className="mt-6 rounded-[2rem] bg-[#F9B6F2] p-8"><h2 className="text-3xl font-black">Already approved?</h2><p className="mt-3 text-black/60">Seasonal activation is shown here only when enabled by an authorized administrator.</p><Link href="/activate-membership" className="mt-6 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white">Activate Membership</Link></div></section>
    </>
  );
}
