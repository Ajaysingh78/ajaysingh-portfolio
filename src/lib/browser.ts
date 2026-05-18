export function scrollToSection(href: string): void {
  const id = href.replace('#', '')
  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function isInViewport(el: Element, threshold = 0.1): boolean {
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function openUrl(url: string): void {
  if (!url) return
  window.open(url, '_blank', 'noopener,noreferrer')
}
