import React, {useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Textarea,
    useDisclosure,
    Badge 
  } from '@chakra-ui/react'


  export default function AddTask({save}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    const [task, setTask] = useState('');
    const [modal, setModal] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'status'){
            setStatus(value);
        } else{
            setDescription(value);
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Description"] = description
        taskObj["Status"] = status
        save(taskObj);  
    }

    return (
      <>
          <Heading padding='6' >Task Managment</Heading>
          <Button ml='40' onClick={onOpen} colorScheme='orange'>Add Project</Button>
  
          <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder='Description' value={description} onChange={handleChange} name='desc' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Textarea placeholder='Description' value={status} onChange={handleChange} name='status' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSave} colorScheme='orange' mr={3}>
                Save
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
 