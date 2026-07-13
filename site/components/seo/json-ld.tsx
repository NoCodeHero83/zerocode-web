export function JsonLd({ items }: { items: object[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': items,
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
