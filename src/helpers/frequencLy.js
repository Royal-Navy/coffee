export const frequencLy = frequency => {
  switch (frequency) {
    case 'daily':
      return 'day'
    case 'weekly':
      return 'week'
    case 'bi-weekly':
      return 'fortnight'
    case 'monthly':
      return 'month'
    default:
      return frequency
  }
}
