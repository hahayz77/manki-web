import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const NewDeckForm = () => {
    const [deckName, setDeckName] = useState("");
    const router = useRouter();

    const handleCreate = () => {
        if (!deckName.trim()) {
            alert("Digite um nome para o baralho");
            return;
        }

        const newDeck = {
            id: String(Date.now()),
            name: deckName,
        };

        console.log("Novo baralho:", newDeck);
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <div className="max-w-md mx-auto space-y-4">
                <h1 className="text-2xl font-bold">Criar Novo Baralho</h1>
                <Input
                    placeholder="Nome do Baralho"
                    className="bg-gray-800 border-gray-700 text-white"
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                />
                <div className="flex gap-2">
                    <Button
                        onClick={() => router.push("/dashboard")}
                        variant="outline"
                        className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleCreate}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Criar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewDeckForm;
