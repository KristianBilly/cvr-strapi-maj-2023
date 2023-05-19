import { useTranslate } from '@/translations/useTranslate'

interface FooterSectionProps {
  columnLinks: string[]
  className: string
}

export const FooterSection = ({
  columnLinks,
  className,
}: FooterSectionProps) => {
  const { t } = useTranslate()

  return (
    <section className="footer-section footer-links-container">
      {columnLinks.map((paragraph) => (
        <p
          className={t(className)}
          key={paragraph}>
          {t(paragraph)}
        </p>
      ))}
    </section>
  )
}
