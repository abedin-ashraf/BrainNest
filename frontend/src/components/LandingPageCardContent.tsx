import * as React from "react"

const LandingPageCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={`${className}`} {...props} />
))
LandingPageCardContent.displayName = "LandingPageCardContent"

export { LandingPageCardContent }