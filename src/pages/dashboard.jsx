import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { DeckList, CardTable, CardEditor } from "@/components/dashboard/index"; // Importe os componentes

// Mock data
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

const DashboardPage = () => {
    const [selectedDeckId, setSelectedDeckId] = useState("1");
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleSaveCard = (updatedCard) => {
        console.log("Salvando cartão:", updatedCard);
        mockCards.map((c) => (c.id === updatedCard.id ? updatedCard : c));
        setSelectedCard(null);
    };

    const handleCancelCard = () => {
        setSelectedCard(null);
    };

    const handleDeleteCard = (cardId) => {
        // Lógica para deletar o cartão
        console.log("Deletando cartão:", cardId);
        mockCards.filter((c) => c.id !== cardId);
        setSelectedCard(null);
    };

    const handleAddDeck = () => {
        console.log("Adicionando Deck");
    };

    const handleAddCard = () => {
        // Lógica para adicionar Card
        console.log("Adicionando Card");
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="p-4">
                <Button
                    as="a"
                    href="/"
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                >
                    <AiOutlineArrowLeft className="mr-2 h-4 w-4" /> Voltar
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                <div className="md:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">
                            Baralhos
                        </h2>
                    </div>
                    <DeckList
                        onSelectDeck={setSelectedDeckId}
                        selectedDeckId={selectedDeckId}
                        onAddDeck={handleAddDeck}
                    />
                </div>

                <div className="md:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">
                            Cartões do Baralho
                        </h2>
                    </div>
                    <CardTable
                        deckId={selectedDeckId}
                        onSelectCard={handleCardClick}
                        onAddCard={handleAddCard}
                    />
                </div>

                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Editar Cartão
                    </h2>
                    {selectedCard ? (
                        <CardEditor
                            card={selectedCard}
                            onSave={handleSaveCard}
                            onCancel={handleCancelCard}
                            onDelete={handleDeleteCard}
                        />
                    ) : (
                        <p className="text-gray-400">
                            Selecione um cartão para editar.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
