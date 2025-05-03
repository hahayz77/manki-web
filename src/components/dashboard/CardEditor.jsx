import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

/**
 * Componente para editar um cartão.
 */
const CardEditor = ({ card, onSave, onCancel, onDelete }) => {
    const [front, setFront] = useState(card ? card.front : "");
    const [back, setBack] = useState(card ? card.back : "");
    const [extra, setExtra] = useState("");
    const [tags, setTags] = useState("");
    const [node, setNode] = useState("deck1");

    useEffect(() => {
        if (card) {
            setFront(card.front);
            setBack(card.back);
        }
    }, [card]);

    const handleSave = () => {
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
        onCancel();
    };

    const handleDelete = () => {
        onDelete(card.id);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
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

export default CardEditor;
