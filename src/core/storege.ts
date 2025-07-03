export default class StorageHandle {
    static setCookie(name: string, value: string, days = 7) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    }

    static getCookie(name: string): string | null {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [key, val] = cookie.split('=');
            if (decodeURIComponent(key) === name) {
                return decodeURIComponent(val);
            }
        }
        return null;
    }

    static deleteCookie(name: string) {
        document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
}

