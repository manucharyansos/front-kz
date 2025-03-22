export function formattedDate(dateString: any) {
    const date = new Date(dateString);
    if (date.getFullYear()<2000) {
        return '-'
    }
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

export function shortFormattedDate(dateString: any) {
    const date = new Date(dateString);
    if (date.getFullYear()<2000) {
        return '-'
    }
    return date.toLocaleString('default', { month: '2-digit', year: 'numeric' });
}