export default function LoadingHomepage() {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="text-center pt-0 pb-12 md:pb-16 mb-8 md:mb-12">
        <div className="h-8 bg-slate-200 rounded w-3/4 mx-auto animate-pulse"></div>
      </section>

      <div className="space-y-8 md:space-y-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="py-8 border-b border-brand-lightBorder last:border-b-0">
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="h-4 bg-slate-200 rounded w-1/3 animate-pulse"></div>
              <div className="h-8 bg-slate-200 rounded w-full animate-pulse"></div>
              <div className="h-5 bg-slate-200 rounded w-full animate-pulse"></div>
              <div className="h-5 bg-slate-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-5 bg-slate-200 rounded w-1/4 animate-pulse mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
