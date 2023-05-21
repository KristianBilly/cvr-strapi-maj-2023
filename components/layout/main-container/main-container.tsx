// @ts-nocheck
import { useSiteContext } from '@/context/site-context'
import { MainContainerWrapper } from './styles'

interface MainContainerProps {
  children: React.ReactNode
  showLinks?: boolean
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const { showLinks } = useSiteContext()

  return (
    <MainContainerWrapper showLinks={showLinks}>
      {' '}
      {children}{' '}
    </MainContainerWrapper>
  )
}
