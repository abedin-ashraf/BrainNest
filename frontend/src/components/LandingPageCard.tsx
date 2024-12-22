import * as React from "react"

const LandingPageCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={`${className} rounded-lg border bg-card text-card-foreground shadow-sm`}
        {...props}
    />
))
LandingPageCard.displayName = "LandingPageCard"



export { LandingPageCard }

