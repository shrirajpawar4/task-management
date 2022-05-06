import { Button, 
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
   useDisclosure,  
   Heading} from "@chakra-ui/react"
import { useState } from "react";

const AddTasks = ({task, onSave}) => {
    const [description, setDescription] = useState("");
    const {isOpen, onClose, onOpen} = useDisclosure();

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ description: description });

        setDescription(description);
    }

    return(
    <>
    <Heading as='h1' size='xl' margin='16'>Task Management App</Heading>
    <Button 
    bg='orange.300' 
    size="lg"
    shadow="md" 
    marginLeft='20'
    _hover={{ bg: 'orange.600'}}
    onClick={onOpen}>
    Add Task
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
      <ModalHeader>Add Task</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <Textarea
        name="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        size="lg"
        shadow="md"
        border="1px"
        borderColor="gray.300"
        borderRadius="15px"
        mr={4}
        my={3}
        p={2}
      />
      </ModalBody>

      <ModalFooter m="auto">
        <Button
          color="white"
          bg='orange.300'
          size="lg"
          shadow="md"
          _hover={{ bg: 'orange.600'}}
          onClick={handleSave}
        >
          Save
        </Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  </>  
  )
}

export default AddTasks;