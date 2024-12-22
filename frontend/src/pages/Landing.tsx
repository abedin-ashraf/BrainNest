import { Button } from "../components/Button"
import { LandingPageCard } from "../components/LandingPageCard";
import { LandingPageCardContent } from "../components/LandingPageCardContent";
import { Logo } from "../icons/Logo";
import { CircleSlash, Brain, Rocket, Users, Star, CheckCircle2 } from 'lucide-react'
import { useNavigate } from "react-router-dom"
// import Image from "next/image"

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Logo />
                        <span className="font-semibold text-xl">BrainNest</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign in</a>
                        <Button variant="primary" onClick={() => { navigate('/signup') }} text="Get Started" />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8">
                            <h1 className="text-5xl font-bold leading-tight">
                                Unlock Your Memorization Potential with BrainNest
                            </h1>
                            <p className="text-xl text-gray-600">
                                The intelligent platform stores all your necessary links handy so that you can recall it anytime.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" onClick={() => { navigate('/signup') }} text="Start Storing Now" />
                            </div>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose BrainNest?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            BrainNest is a smart, secure platform to store, organize, and access your favorite Reels and YouTube videos anytime, anywhere.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="h-8 w-8 text-purple-600" />,
                                title: "Growth with You",
                                description: "Perfect for students, professionals, or content creators who want to save educational, inspirational, or work-related content for future use."
                            },
                            {
                                icon: <Rocket className="h-8 w-8 text-purple-600" />,
                                title: "Cross Platform Syncing",
                                description: "Whether you’re on your phone, tablet, or computer, BrainNest syncs seamlessly across devices so your library is always up-to-date."
                            },
                            {
                                icon: <Users className="h-8 w-8 text-purple-600" />,
                                title: "Collaborative Features",
                                description: "Share your collections with friends, collaborate on playlists, or recommend videos to others."
                            }
                        ].map((feature, index) => (
                            <LandingPageCard key={index} className="border-2">
                                <LandingPageCardContent className="p-6 space-y-4">
                                    <div className="flex">{feature.icon}
                                        <h3 className="pl-3 text-xl font-semibold">{feature.title}</h3></div>
                                    <p className="text-gray-600">{feature.description}</p>
                                </LandingPageCardContent>
                            </LandingPageCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                "name": "Sarah Johnson",
                                "role": "Medical Student",
                                "content": "BrainNest has transformed the way I save and organize educational videos. It's a game-changer for my studies!"
                            },
                            {
                                "name": "Michael Chen",
                                "role": "Software Developer",
                                "content": "The ability to store and share tech tutorials on BrainNest has made learning new tools so much easier."
                            },
                            {
                                "name": "Emily Brown",
                                "role": "Language Learner",
                                "content": "BrainNest’s personalized playlists help me stay on track with my language learning journey like never before."
                            }
                        ].map((testimonial, index) => (
                            <LandingPageCard key={index} className="bg-white">
                                <LandingPageCardContent className="p-6 space-y-4">
                                    <div className="flex justify-end">
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-600 pt-2">{testimonial.content}</p>
                                    <div className="pt-4">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </LandingPageCardContent>
                            </LandingPageCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Basic",
                                price: "Free",
                                features: ["Basic courses", "Community access", "Progress tracking"],
                                buttonText: "Get Started"
                            },
                            {
                                title: "Pro",
                                price: "$29/month",
                                features: ["All Basic features", "Advanced courses", "1-on-1 mentoring", "Certificates"],
                                buttonText: "Try Pro",
                                highlighted: true
                            },
                            {
                                title: "Enterprise",
                                price: "Custom",
                                features: ["All Pro features", "Custom learning paths", "API access", "Dedicated support"],
                                buttonText: "Contact Sales"
                            }
                        ].map((plan, index) => (
                            <LandingPageCard key={index} className={`${plan.highlighted ? 'border-2 border-purple-600 shadow-lg' : ''}`}>
                                <LandingPageCardContent className="p-6 space-y-6">
                                    <h3 className="text-xl font-semibold">{plan.title}</h3>
                                    <p className="text-3xl font-bold">{plan.price}</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        text={plan.buttonText} variant="primary"
                                    />
                                </LandingPageCardContent>
                            </LandingPageCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-white">
                            Ready to Use Your Second Brain
                        </h2>
                        <p className="text-purple-100">
                            Join thousands of learners who are already experiencing the power of second brain with BrainNest.
                        </p>
                        <div className="flex justify-center">
                            <Button text="Get Started For Free" variant="secondary" onClick={() => navigate('/signup')} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <CircleSlash className="h-6 w-6" />
                                <span className="font-semibold text-xl text-white">BrainNest</span>
                            </div>
                            <p className="text-sm">
                                Empowering learners worldwide with adaptive memorization technology.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Use Cases</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                        <p>&copy; {new Date().getFullYear()} BrainNest. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

