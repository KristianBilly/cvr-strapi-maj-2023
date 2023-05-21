// @ts-nocheck

import { useState } from 'react'
import { API_ENDPOINT_VIRKOPEDIA } from '@/constants/constants'
import { getLocalisedData } from '@/utils/get-localised-data'
import { GetStaticProps } from 'next'
import cc from 'classcat'
import { BaseLayout } from '@/styles/base-layout'
import { fontWeights, textFontSizes } from '@/styles/shared-styles'
import { Text } from '@/styles/styled-text'
import styled from '@emotion/styled'
import { StyledButton } from '@/styles/styled-button'

interface VirkopediaProps {
  // articles:
}

const Virkopedia = ({ articles }: VirkopediaProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const localisedArticles = getLocalisedData(articles)
  const { content, title } = localisedArticles[activeButtonIndex].attributes

  return (
    <BaseLayout>
      <Text
        fontSize={textFontSizes.h2}
        fontWeight={fontWeights.bold}>
        Virkopedia
      </Text>
      <VirkopediaContainer>
        <VirkopediaButtonContainer>
          {localisedArticles.map((article, index: number) => {
            const { title } = article.attributes
            const isActiveButton = index === activeButtonIndex

            return (
              <ArticleButton
                isActiveButton={isActiveButton}
                key={title + index}
                onClick={() => setActiveButtonIndex(index)}>
                {title}
              </ArticleButton>
            )
          })}
        </VirkopediaButtonContainer>
        <article>
          <Text
            fontSize={textFontSizes.h3}
            fontWeight={fontWeights.bold}>
            {title}
          </Text>

          <ArticleContent>{content}</ArticleContent>
        </article>
      </VirkopediaContainer>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(API_ENDPOINT_VIRKOPEDIA)
  const articles = await response.json()

  return {
    props: {
      articles,
    },
  }
}

export default Virkopedia

export const ArticleContent = styled(Text)`
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 2rem;
`

export const VirkopediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const VirkopediaButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 0 0 content;
  min-width: 200px;

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const ArticleButton = styled(StyledButton)`
  text-transform: capitalize;
  padding: 0.5rem;
  font-size: 1.25rem;
  text-decoration: underline;
  color: ${(props) => (props.isActiveButton ? 'rgb(101, 167, 189);' : 'black')};

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`
