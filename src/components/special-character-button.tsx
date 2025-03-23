"use client"

import { Button } from "@/components/ui/button"

interface SpecialCharacterButtonProps {
  character: string
  onClick: () => void
}

export function SpecialCharacterButton({ character, onClick }: SpecialCharacterButtonProps) {
  return (
    <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium" onClick={onClick}>
      {character}
    </Button>
  )
}

