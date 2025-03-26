import { Flex } from '@chakra-ui/react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import Sidebar from '../components/sidebar/sidebar'

export const Route = createRootRoute({
    component: () => (
        <Flex h="100vh" w="100vw">
            <Sidebar />
            <Outlet />
        </Flex>
    ),
})