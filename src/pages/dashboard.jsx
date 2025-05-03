import { useState, useEffect } from "react";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

// Mock data para baralhos e cartões
const mockDecks = [
    { id: "1", name: "Francês Básico" },
    { id: "2", name: "Vocabulário Avançado" },
    { id: "3", name: "Verbos Franceses" },
];

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
 * Componente para exibir a lista de baralhos disponíveis.
 */
const DeckList = ({ onSelectDeck, selectedDeckId }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDecks = mockDecks.filter((deck) =>
        deck.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <Input
                type="text"
                placeholder="Pesquisar baralhos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <div className="space-y-2">
                {filteredDecks.map((deck) => (
                    <Card
                        key={deck.id}
                        className={cn(
                            "bg-gray-800 border-gray-700 text-white cursor-pointer hover:bg-gray-700/50 transition-colors",
                            selectedDeckId === deck.id && "ring-2 ring-blue-500" // Adiciona um anel ao deck selecionado
                        )}
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

/**
 * Componente para exibir os cartões de um baralho selecionado em uma tabela.
 */
const CardTable = ({ deckId, onSelectCard }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCards = mockCards.filter(
        (card) =>
            card.deckId === deckId &&
            (card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.back.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-4">
            <Input
                type="text"
                placeholder="Pesquisar cartões..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
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
                            onClick={() => onSelectCard(card)} // Passa o card clicado para o componente pai
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

/**
 * Componente para editar um cartão.
 */
const CardEditor = ({ card, onSave, onCancel, onDelete }) => {
    const [front, setFront] = useState(card ? card.front : "");
    const [back, setBack] = useState(card ? card.back : "");
    const [extra, setExtra] = useState(""); // Você pode adicionar um estado para 'extra' se necessário
    const [tags, setTags] = useState("");
    const [node, setNode] = useState("deck1"); // Valor padrão

    // Atualiza o estado local quando o card prop muda
    useEffect(() => {
        if (card) {
            setFront(card.front);
            setBack(card.back);
        }
    }, [card]);

    const handleSave = () => {
        // Lógica para salvar as alterações do cartão
        const updatedCard = {
            ...card,
            front,
            back,
            extra,
            tags,
            node,
        };
        onSave(updatedCard);
    };

    const handleCancel = () => {
        // Lógica para cancelar as alterações e voltar ao estado anterior
        onCancel();
    };

    const handleDelete = () => {
        onDelete(card.id);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
                {/* Campo Frente */}
                <div>
                    <Label
                        htmlFor="front"
                        className="block text-sm font-medium text-gray-300 mb-1"
                    >
                        Frente
                    </Label>
                    <Textarea
                        id="front"
                        value={front}
                        onChange={(e) => setFront(e.target.value)}
                        placeholder="Conteúdo da frente do cartão"
                        className="w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                {/* Campo Verso */}
                <div>
                    <Label
                        htmlFor="back"
                        className="block text-sm font-medium text-gray-300 mb-1"
                    >
                        Verso
                    </Label>
                    <Textarea
                        id="back"
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                        placeholder="Conteúdo do verso do cartão"
                        className="w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                {/* Campo Extra */}
                <div>
                    <Label
                        htmlFor="extra"
                        className="block text-sm font-medium text-gray-300 mb-1"
                    >
                        Extra
                    </Label>
                    <Textarea
                        id="extra"
                        value={extra}
                        onChange={(e) => setExtra(e.target.value)}
                        placeholder="Informações adicionais"
                        className="w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                {/* Campo Etiquetas */}
                <div>
                    <Label
                        htmlFor="tags"
                        className="block text-sm font-medium text-gray-300 mb-1"
                    >
                        Etiquetas
                    </Label>
                    <Input
                        id="tags"
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Etiquetas separadas por espaço"
                        className="w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Select Node */}
                <div>
                    <Label
                        htmlFor="node"
                        className="block text-sm font-medium text-gray-300 mb-1"
                    >
                        Node
                    </Label>
                    <Select onValueChange={setNode} value={node}>
                        <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Selecione o Node" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="deck1">Deck 1</SelectItem>
                            <SelectItem value="deck2">Deck 2</SelectItem>
                            <SelectItem value="deck3">Deck 3</SelectItem>
                            <SelectItem value="class1">Class 1</SelectItem>
                            <SelectItem value="class2">Class 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
                >
                    Cancelar
                </Button>
                <Button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white"
                >
                    Deletar
                </Button>
                <Button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                    Salvar
                </Button>
            </div>
        </div>
    );
};

/**
 * Componente principal para a página de painel.
 */
const DashboardPage = () => {
    const router = useRouter();
    const [selectedDeckId, setSelectedDeckId] = useState("1"); // Define um deck inicial
    const [selectedCard, setSelectedCard] = useState(null); // Estado para o cartão selecionado

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleSaveCard = (updatedCard) => {
        // Lógica para salvar o cartão atualizado (API call, state update)
        console.log("Salvando cartão:", updatedCard);
        // Atualizar o mockCards
        mockCards.map((c) => (c.id === updatedCard.id ? updatedCard : c));
        setSelectedCard(null); // Clear selection
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
                {/* Primeira parte: Lista de Baralhos */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Baralhos
                    </h2>
                    <DeckList
                        onSelectDeck={setSelectedDeckId}
                        selectedDeckId={selectedDeckId}
                    />
                </div>

                {/* Segunda parte: Tabela de Cartões */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Cartões do Baralho
                    </h2>
                    <CardTable
                        deckId={selectedDeckId}
                        onSelectCard={handleCardClick}
                    />
                </div>

                {/* Terceira parte: Painel de Edição (Reutilizando CardEditor) */}
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
