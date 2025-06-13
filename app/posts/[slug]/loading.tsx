import { Loader2 } from "lucide-react"

export default function LoadingPost() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[60vh] py-12">
      <Loader2 className="h-10 w-10 animate-spin text-brand-accent mb-6" />
      <p className="text-brand-mutedText text-lg font-sans mb-12">Loading article...</p>
      <div className="w-full space-y-8">
        <div className="h-12 bg-slate-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-6 bg-slate-200 rounded w-1/2 animate-pulse mb-8"></div>

        <div className="space-y-4">
          <div className="h-5 bg-slate-200 rounded w-full animate-pulse"></div>
          <div className="h-5 bg-slate-200 rounded w-full animate-pulse"></div>
          <div className="h-5 bg-slate-200 rounded w-5/6 animate-pulse"></div>
        </div>
        <div className="h-40 bg-slate-200 rounded w-full animate-pulse mt-8"></div>
        <div className="space-y-4 mt-8">
          <div className="h-5 bg-slate-200 rounded w-full animate-pulse"></div>
          <div className="h-5 bg-slate-200 rounded w-4/6 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
