import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useRef, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    async function signin() {
        try {
            setIsLoading(true)
            setError("")
            const username = usernameRef.current?.value
            const password = passwordRef.current?.value

            if (!username || !password) {
                setError("Please fill in all fields")
                return
            }

            await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })

            navigate('/dashboard')
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }


    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl  border min-w-48 p-8">

            {/* Logo and Header */}
            <div className="text-center space-y-2">
                <div className="flex justify-center"><Logo /></div>
                <h1 className="text-3xl font-bold text-gray-900">BrainNest</h1>
                <p className="text-gray-500 pb-2">Sign in to your account</p>
            </div>

            {/* Form */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <Input
                        reference={usernameRef}
                        placeholder="Username"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <Input
                        reference={passwordRef}
                        placeholder="Password"
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                </div>

                {error && (
                    <div className="text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <Button
                    onClick={signin}
                    variant="primary"
                    text="Sign in"
                    fullWidth={true}
                    loading={isLoading}
                />
            </div>


            {/* Footer */}
            <div className="text-center text-sm pt-2">
                <span className="text-gray-500">Don't have an account?</span>{" "}
                <button
                    onClick={() => { navigate('/signup') }}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                >
                    Sign up
                </button>
            </div>

        </div>
    </div>
}