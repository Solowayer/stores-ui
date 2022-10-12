import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '../components'

export default {
  title: 'Components/Surface/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
}