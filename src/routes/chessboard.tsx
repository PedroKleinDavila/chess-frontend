import { createFileRoute } from '@tanstack/react-router'
import Chessboard from '../components/chessboard/chessboard'

export const Route = createFileRoute('/chessboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Chessboard />
  )
}
