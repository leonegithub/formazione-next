export function getCookie(name: string): string | null{
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
}

export function removeCookie(name: string): void {
    document.cookie = `${name}=; expires=${new Date().toUTCString()}; path=/`;
}