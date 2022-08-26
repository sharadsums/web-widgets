// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.

// BEGIN EXTRA CODE

function cloneWithNewUrl(link: HTMLLinkElement, href: string): HTMLLinkElement {
    const target = <HTMLLinkElement>link.cloneNode();
    const search = new URL(link.href).search;
    const targetHref = new URL(href);
    targetHref.search = search;
    target.href = targetHref.toString();
    return target;
}

// END EXTRA CODE

/**
 * @param {string} iconUrl16x16
 * @param {string} iconUrl32x32
 * @param {string} appleTouchIconUrl
 * @returns {Promise.<void>}
 */
export async function SetFavicon(iconUrl16x16: string, iconUrl32x32: string, appleTouchIconUrl: string): Promise<void> {
    // BEGIN USER CODE

    const entries = [
        ["link[rel=icon][sizes=16x16]", iconUrl16x16],
        ["link[rel=icon][sizes=32x32]", iconUrl32x32],
        ["link[rel=apple-touch-icon]", appleTouchIconUrl]
    ];

    const links = entries.reduce<HTMLLinkElement[]>((acc, [selector, href]) => {
        const element = document.querySelector<HTMLLinkElement>(selector);
        if (element) {
            acc.push(cloneWithNewUrl(element, href));
        }
        return acc;
    }, []);

    document.head.append(...links);

    // END USER CODE
}
