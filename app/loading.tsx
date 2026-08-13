export default function Loading() {
  return (
    <div className="grid min-h-[50vh] place-items-center py-24" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span
          className="h-10 w-10 animate-spin rounded-full border-[3px] border-pine-soft border-t-pine"
          aria-hidden="true"
        />
        <p className="text-muted">جاري تحميل المحتوى…</p>
      </div>
    </div>
  );
}
