import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/50 px-4 py-5 text-base text-white placeholder:text-white/60",
        "focus:outline-none focus:border-emerald-300", // ✅ Proper focus border
        "disabled:cursor-not-allowed disabled:opacity-50", // ✅ fixed typo 'opacty'
        className
      )}
      {...props}
    />
  )
}


export { Textarea }
