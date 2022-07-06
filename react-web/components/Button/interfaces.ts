export interface ButtonProps {
  testId?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text?: string
  isActive?: boolean
  isOutline?: boolean
}
