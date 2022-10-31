import React, { HTMLAttributes, ElementType, ReactNode } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledCard } from './styled'
import { backgroundColors } from '../themes/light-theme/background-colors'

export type CardStyles = {
  backgroundColor?: string
  backgroundImage?: string
  height?: string
  hoverShadow?: boolean
}

export interface CardProps extends CardStyles, HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: ReactNode
}

export const Card = ({
  as = 'div',
  backgroundColor = backgroundColors.backgroundPrimary,
  backgroundImage,
  height,
  hoverShadow,
  children,
  ...rest
}: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard
        as={as}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        height={height}
        hoverShadow={hoverShadow}
        {...rest}
      >
        {children}
      </StyledCard>
    </LibraryThemeProvider>
  )
}
