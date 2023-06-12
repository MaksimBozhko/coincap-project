import React from "react"

export type Mods = Record<string, string | boolean | undefined>

const classNames = (
  className: string,
  mods: { [p: number]: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined } = {},
  additional: Array<string | undefined> = []
): string => {

    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
          .filter(([_, value]) => Boolean(value))
          .map(([className]) => className)
    ].join(" ")
}

export default classNames