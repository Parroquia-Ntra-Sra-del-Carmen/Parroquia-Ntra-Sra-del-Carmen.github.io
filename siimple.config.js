import colors from "@siimple/colors";
import base from "@siimple/preset-base";

export default {
    useRootStyles: true,
    useBorderBox: true,
    prefix: "",
    ...base,
    colors: {
        ...Object.keys(colors).reduce((prev, name) => ({
            ...prev,
            ...Object.fromEntries(Object.keys(colors[name]).map(shade => {
                return [`${name}-${shade}`, colors[name][shade]];
            })),
        }), {}),
        // ...other colors
        ...base.colors,
        primary: colors.red["700"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
        muted: colors.gray["200"],
    },
    fonts: {
        body: "'Roboto',sans-serif",
        heading: "'Montserrat',sans-serif",
        code: "monospace",
    },
};

