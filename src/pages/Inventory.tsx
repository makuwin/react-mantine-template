import { Button, Drawer, Modal, Space, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";


const Inventory = () => {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),    
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  const [opened, { open, close }] = useDisclosure(false);

  const [opened2, { open : open2, close : close2}] = useDisclosure(false);

  return (
    <>
      <Button
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
      <Space h={'md'}/>
      <Button onClick={openModal}>Open confirm modal</Button>
      <Space h={'md'}/>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>
      <Button onClick={open}>Open centered Modal</Button> 
      <Space h={'md'}/>
      <Drawer
        opened={opened2}
        onClose={close2}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open2}>Open drawer</Button>
    </>
  )
}

export default Inventory
