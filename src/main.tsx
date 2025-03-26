import { ChakraProvider } from "@chakra-ui/react"
import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import theme from "./styles/theme"

// Create a new router instance
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </StrictMode>,
    )
}