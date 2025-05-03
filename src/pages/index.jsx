import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    FaBookOpen,
    FaPlusCircle,
    FaClock,
    FaGripVertical,
} from "react-icons/fa";
import { FiZap, FiGrid } from "react-icons/fi"; // Added FiGrid

const sampleDecks = [
    {
        id: "1",
        name: "Francês Básico",
        newCards: 30,
        learningCards: 15,
        reviewCards: 5,
    },
    {
        id: "2",
        name: "Vocabulário Avançado",
        newCards: 10,
        learningCards: 20,
        reviewCards: 10,
    },
    {
        id: "3",
        name: "Verbos Franceses",
        newCards: 0,
        learningCards: 5,
        reviewCards: 25,
    },
    {
        id: "4",
        name: "Le Petit Prince",
        newCards: 20,
        learningCards: 0,
        reviewCards: 0,
    },
    {
        id: "5",
        name: "5000 Palavras Mais Comuns",
        newCards: 5,
        learningCards: 2,
        reviewCards: 3,
    },
    {
        id: "6",
        name: "Francês F1",
        newCards: 0,
        learningCards: 0,
        reviewCards: 0,
    },
    {
        id: "7",
        name: "Francês 1000 Sentenças",
        newCards: 30,
        learningCards: 30,
        reviewCards: 0,
    },
    {
        id: "8",
        name: "FR - Les Verbes",
        newCards: 0,
        learningCards: 0,
        reviewCards: 0,
    },
    {
        id: "9",
        name: "Francês para Português",
        newCards: 10,
        learningCards: 7,
        reviewCards: 2,
    },
    { id: "10", name: "FR 🚀", newCards: 5, learningCards: 7, reviewCards: 3 },
    {
        id: "11",
        name: "CFO 🌟",
        newCards: 15,
        learningCards: 10,
        reviewCards: 50,
    },
];

/**
 * Componente para exibir a lista de baralhos.
 */
const DeckList = () => {
    const [decks, setDecks] = useState(sampleDecks);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simula o carregamento de dados
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    /**
     * Determina a variante do badge com base na contagem.
     * @param count - A contagem de cartões.
     * @returns A variante do badge ('secondary' para 0, 'default' caso contrário).
     */
    const getBadgeVariant = (count) => {
        if (count === 0) {
            return "secondary";
        }
        return "default";
    };

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaBookOpen className="w-6 h-6" />
                    Baralhos
                </h1>
                <div className="mt-6 flex gap-4">
                    {" "}
                    {/* Added flex and gap */}
                    <Button as="a" href="/card/new" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors duration-300 flex-1">
                        {" "}
                        {/* Added flex-1 */}
                        <FaPlusCircle className="mr-2 w-5 h-5" />
                        Criar Cartão
                    </Button>
                    <Button as="a" href="/dashboard" className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors duration-300 flex-1">
                        {" "}
                        {/* Added new button and flex-1 */}
                        <FiGrid className="mr-2 w-5 h-5" />
                        Painel
                    </Button>
                </div>
                <ScrollArea className="rounded-md border border-gray-800">
                    {" "}
                    {/* Removed height restriction from ScrollArea here */}
                    <div className="p-4">
                        {loading ? (
                            <div className="text-gray-400 text-center">
                                Carregando baralhos...
                            </div> //TODO: Implementar Skeleton
                        ) : decks.length === 0 ? (
                            <div className="text-gray-400 text-center">
                                Nenhum baralho encontrado. Crie um novo baralho
                                para começar.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {decks.map((deck) => (
                                    <Card
                                        key={deck.id}
                                        className={cn(
                                            "cursor-pointer",
                                            "bg-gray-800 border-gray-700 shadow-lg",
                                            "transition-all duration-300",
                                            "hover:bg-gray-700/50 hover:scale-[1.01]",
                                            "group"
                                        )}
                                    >
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
                                                <span className="group-hover:underline flex-1">
                                                    {deck.name}
                                                </span>
                                                <FaGripVertical className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="text-center">
                                                    <div className="text-sm font-medium text-gray-400 flex items-center justify-center gap-1">
                                                        <FaPlusCircle className="w-4 h-4" />
                                                        Novos
                                                    </div>
                                                    <Badge
                                                        variant={getBadgeVariant(
                                                            deck.newCards
                                                        )}
                                                        className="text-white font-bold px-3 py-1 rounded-full"
                                                    >
                                                        {deck.newCards}
                                                    </Badge>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm font-medium text-gray-400 flex items-center justify-center gap-1">
                                                        <FiZap className="w-4 h-4" />
                                                        Aprender
                                                    </div>
                                                    <Badge
                                                        variant={getBadgeVariant(
                                                            deck.learningCards
                                                        )}
                                                        className="text-white font-bold px-3 py-1 rounded-full"
                                                    >
                                                        {deck.learningCards}
                                                    </Badge>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm font-medium text-gray-400 flex items-center justify-center gap-1">
                                                        <FaClock className="w-4 h-4" />
                                                        Revisar
                                                    </div>
                                                    <Badge
                                                        variant={getBadgeVariant(
                                                            deck.reviewCards
                                                        )}
                                                        className="text-white font-bold px-3 py-1 rounded-full"
                                                    >
                                                        {deck.reviewCards}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </ScrollArea>{" "}
                {/* Moved ScrollArea below the buttons */}
            </div>
        </div>
    );
};

export default DeckList;
