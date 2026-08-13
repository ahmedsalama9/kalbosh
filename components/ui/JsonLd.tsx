/**
 * Renders a JSON-LD <script>. The payload is stringified and `<` is escaped
 * to its unicode form to avoid any HTML-injection through content strings.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
