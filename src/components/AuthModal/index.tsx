import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Authenticate to continue</ModalHeader>
        <ModalCloseButton mt="1rem" />

        <ModalBody>
          <Text>You will need to authenticate to buy this product</Text>
          <Text>
            You can sign in with Google in the top right corner button
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="gray.800"
            color="gray.50"
            _hover={{ background: "gray.800" }}
            onClick={onClose}
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
