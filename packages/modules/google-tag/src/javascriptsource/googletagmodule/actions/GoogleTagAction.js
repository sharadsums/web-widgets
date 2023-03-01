// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
if (document.mxGtag === undefined) {
	// init data layer
	window.dataLayer = window.dataLayer || [];
	const gtagMethod = function () {
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer.push(arguments);
	};
	let isGtagIncluded = false;
	document.mxGtag = {
		getGtag() {
			return gtagMethod;
		},
		ensureGtagIncluded(tagId) {
			var _a;
			if (!isGtagIncluded) {
				// include script
				const scriptTag = document.createElement("script");
				scriptTag.type = "text/javascript";
				scriptTag.async = true;
				scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
				(_a = document.querySelector("head")) === null || _a === void 0 ? void 0 : _a.appendChild(scriptTag);
				// setup timestamp
				gtagMethod("js", new Date());
				isGtagIncluded = true;
				return true;
			}
			return false;
		}
	};
}
// END EXTRA CODE

/**
 * @param {"GoogleTagModule.GoogleTagCommandType.Config"|"GoogleTagModule.GoogleTagCommandType.Event"} command - Event can be used to send an event. Config can be used to configure advanced configuration parameters and can only be used once.
 * @param {string} tagID - Examples of tag IDs include GT-XXXXXXXXX, G-XXXXXXXXX, and AW-XXXXXXXXX
 * @param {string} eventName
 * @param {MxObject[]} parameters
 * @returns {Promise.<void>}
 */
export async function GoogleTagAction(command, tagID, eventName, parameters) {
	// BEGIN USER CODE
	const params = parameters.reduce((a, p) => {
		const value = p.get("Value");
		a[p.get("Name")] = value === "true" ? true : (value === "false" ? false : value); 
		return a; 
	}, {});
	const cmd = command.split(".").pop().toLowerCase();

	console.log(cmd, params);

	switch (cmd) {
        case "config": {
            document.mxGtag.ensureGtagIncluded(tagId);
            document.mxGtag.getGtag()(cmd, tagId, params);
            break;
        }
        case "event": {
            document.mxGtag.getGtag()(cmd, eventName, params);
            break;
        }
    }
	// END USER CODE
}
