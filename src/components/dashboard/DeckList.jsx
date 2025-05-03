import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const mockDecks = [
    { id: "1", name: "Francês Básico" },
    { id: "2", name: "Vocabulário Avançado" },
    { id: "3", name: "Verbos Franceses" },
];

const DeckList = ({ onSelectDeck, selectedDeckId }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDecks = mockDecks.filter((deck) =>
        deck.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Input
                    type="text"
                    placeholder="Pesquisar baralhos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-2/3"
                />
                <Button
                    as="a"
                    href="/deck/new"
                    variant="outline"
                    className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
                >
                    <AiOutlinePlus className="mr-2 h-4 w-4" /> Adicionar
                </Button>
            </div>
            <div className="space-y-2">
                {filteredDecks.map((deck) => (
                    <Card
                        key={deck.id}
                        className={`bg-gray-800 border-gray-700 text-white cursor-pointer hover:bg-gray-700/50 transition-colors ${selectedDeckId === deck.id ? "ring-2 ring-blue-500" : ""}`}
                        onClick={() => onSelectDeck(deck.id)}
                    >
                        <CardHeader>
                            <CardTitle>{deck.name}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DeckList;
