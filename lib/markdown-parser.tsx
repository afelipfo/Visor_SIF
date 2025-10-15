import type React from "react"

export function parseMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []
  let key = 0

  let inList = false
  let listItems: React.ReactNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Skip empty lines but close list if we were in one
    if (!line.trim()) {
      if (inList) {
        elements.push(
          <ol key={`list-${key++}`} className="list-decimal list-inside space-y-2 mb-3 ml-2">
            {listItems}
          </ol>,
        )
        listItems = []
        inList = false
      }
      elements.push(<br key={`br-${key++}`} />)
      continue
    }

    const numberedListMatch = line.match(/^(\d+)\.\s+(.+)$/)
    if (numberedListMatch) {
      inList = true
      const content = parseInlineMarkdown(numberedListMatch[2])
      listItems.push(
        <li key={`li-${key++}`} className="mb-2 leading-relaxed">
          {content}
        </li>,
      )
      continue
    }

    // If we were in a list but this line isn't a list item, close the list
    if (inList) {
      elements.push(
        <ol key={`list-${key++}`} className="list-decimal list-inside space-y-2 mb-3 ml-2">
          {listItems}
        </ol>,
      )
      listItems = []
      inList = false
    }

    // Parse regular paragraphs
    elements.push(
      <p key={`p-${key++}`} className="mb-2 leading-relaxed">
        {parseInlineMarkdown(line)}
      </p>,
    )
  }

  if (inList && listItems.length > 0) {
    elements.push(
      <ol key={`list-${key++}`} className="list-decimal list-inside space-y-2 mb-3 ml-2">
        {listItems}
      </ol>,
    )
  }

  return elements
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = []
  let key = 0
  let currentIndex = 0

  const regex = /(\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\))/g
  let match

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      elements.push(text.substring(currentIndex, match.index))
    }

    // Check if it's bold text
    if (match[2]) {
      elements.push(
        <strong key={`bold-${key++}`} className="font-semibold">
          {match[2]}
        </strong>,
      )
    }
    // Check if it's a link
    else if (match[3] && match[4]) {
      elements.push(
        <a
          key={`link-${key++}`}
          href={match[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline decoration-primary/50 hover:decoration-primary transition-colors font-medium inline-flex items-center gap-1"
        >
          {match[3]}
        </a>,
      )
    }

    currentIndex = match.index + match[0].length
  }

  // Add remaining text
  if (currentIndex < text.length) {
    elements.push(text.substring(currentIndex))
  }

  return elements.length > 0 ? elements : [text]
}
