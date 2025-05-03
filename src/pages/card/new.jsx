import React, { useState } from "react";
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
import { cn } from "@/lib/utils";

/**
 * Componente para criação de cartões com frente, verso e informações extras.
 */
const NewCard = () => {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [extra, setExtra] = useState("");
    const [tags, setTags] = useState("");
    const [node, setNode] = useState("deck1"); // Valor padrão

    const handleCreateCard = () => {
        // Lógica para criar o cartão (enviar para o backend, salvar no estado, etc.)
        console.log({ front, back, extra, tags, node });
        alert(
            `Cartão criado com os seguintes dados:\nFrente: ${front}\nVerso: ${back}\nExtra: ${extra}\nEtiquetas: ${tags}\nNode: ${node}`
        );
        // Aqui você pode adicionar a lógica para limpar os campos após a criação do cartão
        setFront("");
        setBack("");
        setExtra("");
        setTags("");
    };

    return (
        <div className="space-y-6 p-8 md:mx-32 border rounded-md bg-gray-900 border-gray-800">
            <h2 className="text-2xl font-bold text-gray-200">
                Criar Novo Cartão
            </h2>

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

                {/* Botão Criar Cartão */}
                <Button
                    onClick={handleCreateCard}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300 w-full"
                >
                    Criar Cartão
                </Button>
            </div>
        </div>
    );
};

export default NewCard;
