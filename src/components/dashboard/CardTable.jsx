import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AiOutlinePlus } from "react-icons/ai";

// Mock data para cartões
const mockCards = [
    { id: "1", front: "Bonjour", back: "Olá", deckId: "1" },
    { id: "2", front: "Merci", back: "Obrigado", deckId: "1" },
    { id: "3", front: "Au revoir", back: "Adeus", deckId: "1" },
    {
        id: "4",
        front: "Comment allez-vous?",
        back: "Como vai você?",
        deckId: "2",
    },
    { id: "5", front: "Je suis fatigué", back: "Estou cansado", deckId: "2" },
];

/**
 * Componente para exibir os cartões de um baralho selecionado em uma tabela.
 */
const CardTable = ({ deckId, onSelectCard, onAddCard }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCards = mockCards.filter(
        (card) =>
            card.deckId === deckId &&
            (card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.back.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleAdd = () => {
        onAddCard();
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Input
                    type="text"
                    placeholder="Pesquisar cartões..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-2/3"
                />
                <Button
                    variant="outline"
                    onClick={handleAdd}
                    as="a"
                    href="/card/new"
                    className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
                >
                    <AiOutlinePlus className="mr-2 h-4 w-4" /> Adicionar
                </Button>
            </div>
            <Table className="bg-gray-800 border-gray-700 text-white">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-white">Frente</TableHead>
                        <TableHead className="text-white">Verso</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredCards.map((card) => (
                        <TableRow
                            key={card.id}
                            className="hover:bg-gray-700/50 cursor-pointer transition-colors"
                            onClick={() => onSelectCard(card)}
                        >
                            <TableCell className="font-medium text-white">
                                {card.front}
                            </TableCell>
                            <TableCell className="text-gray-300">
                                {card.back}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CardTable;
