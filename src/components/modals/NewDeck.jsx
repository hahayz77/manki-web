import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";

const NewDeckModal = ({ isOpen, onClose, onCreateDeck }) => {
    const [newDeckName, setNewDeckName] = useState("");

    const handleCreate = () => {
        onCreateDeck(newDeckName);
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} backdrop="blur" size="md">
            <ModalContent className="bg-gray-800 text-white border-gray-700">
                {(onCloseModal) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-white">
                            Novo Baralho
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                placeholder="Nome do Baralho"
                                className="mb-4 bg-gray-700 text-white border-gray-600"
                                value={newDeckName}
                                onChange={(e) => setNewDeckName(e.target.value)}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                variant="outline"
                                onClick={onCloseModal}
                                className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 mr-2"
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={handleCreate}
                                className="bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                Criar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default NewDeckModal;
