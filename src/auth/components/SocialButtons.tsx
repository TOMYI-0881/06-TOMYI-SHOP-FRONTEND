function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.5-1.74 4.4-5.27 4.4-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.66 3.94 14.6 3 12.18 3 7.13 3 3 7.13 3 12.2s4.13 9.2 9.18 9.2c5.3 0 8.82-3.72 8.82-8.96 0-.6-.07-1.06-.15-1.34Z" />
    </svg>
  );
}

export function SocialButtons() {
  return (
    <>
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">O continúa con</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          className="
                    col-start-2
                    ml-0
                    md:ml-8
                    justify-self-center
                    md:justify-self-start
                    flex
                    h-11
                    w-14
                    md:w-16
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-border
                    bg-background
                    hover:bg-accent
                    cursor-pointer
                    transition-colors
                  "
        >
          <GoogleIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
