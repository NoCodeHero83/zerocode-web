"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 sm:py-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & branding */}
<div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Zerocode Logo"
    className="h-16 w-auto"
  />
</div>
          {/* Contact info */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              https://www.zerocode.la
            </p>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Zerocode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
