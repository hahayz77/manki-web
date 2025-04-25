import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

const Login = () => {
    const { data: session, status } = useSession()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (status === "authenticated") {
        }
    }, [status])

    const handleLogin = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            if (email && password) {
                signIn("google")
            } else {
                setError("Por favor, preencha email e senha.")
            }
        } catch (err) {
            setError(err.message || "Ocorreu um erro ao fazer login.")
        } finally {
            setIsLoading(false)
        }
    }

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-[350px] shadow-lg">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Entrar no Anki App</h2>
                    <p>
                        Faça login para acessar sua conta.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="dark:bg-gray-800 dark:text-white"
                            disabled={isLoading}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="dark:bg-gray-800 dark:text-white"
                            disabled={isLoading}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button
                        className="w-full"
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? "Carregando..." : "Entrar"}
                    </Button>
                    <div className="flex items-center justify-center">
                        <Button
                            variant="outline"
                            className="w-full flex items-center gap-2 dark:bg-gray-800 dark:text-white"
                            onClick={() => signIn("google")}
                            disabled={isLoading}
                        >
                            <FcGoogle className="w-4 h-4" />
                            Entrar com o Google
                        </Button>
                    </div>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                            Esqueceu sua senha?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login