export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr)

    return date.toLocaleDateString('en-IN', {
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return `${str.slice(0, maxLength).trimEnd()}...`
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function formatStat(value: string | number): string {
  return String(value)
}
