import { useTranslate } from 'translations/useTranslate'

export const FooterSection = ({ columnLinks, className }) => {
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
