import { Flex } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flex></Flex>
  )
}
