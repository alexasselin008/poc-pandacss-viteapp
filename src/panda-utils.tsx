
import { Box } from '../styled-system/jsx';
import { ConditionalValue } from '../styled-system/types';
import { PropertyTypes, PropertyValue, PropertyValueTypes } from '../styled-system/types/prop-type';
import { SystemProperties } from '../styled-system/types/style-props';
import { CssProperties } from '../styled-system/types/system-types';

// if we want to include shorthand properties, we need to use the following type
// type AllPandaProperties = keyof SystemProperties
// type OnlyPropertiesWithTokens = keyof Pick<SystemProperties, keyof PropertyTypes>

// if we don'T want shorthand properties, we need these types
type AllPandaProperties = keyof Pick<SystemProperties, keyof PropertyValueTypes>
type OnlyPropertiesWithTokens = keyof Pick<SystemProperties, keyof PropertyValueTypes>


type PrefixKeys<T extends {}, P extends string> = {
    // @ts-ignore K can be a symbol, but lets just ignore this case for now
    [K in keyof T as `${P}${K}`]: T[K];
}
export const UnsafePrefix = "UNSAFE_";
export type StrictSystemProperties = Partial<{
    [K in AllPandaProperties]: StrictPropertyValue<K>
} & PrefixKeys<{
    [K in OnlyPropertiesWithTokens]: PropertyValue<K>
}, typeof UnsafePrefix>>


export type StrictPropertyValue<T extends string> = T extends keyof PropertyTypes
  ? ConditionalValue<PropertyTypes[T]> // only this line has changed from PropertyValue
  : T extends keyof CssProperties
  ? ConditionalValue<CssProperties[T]>
  : ConditionalValue<string | number>

export type MyBoxProps = StrictSystemProperties
export function MyBox(props: MyBoxProps) {
    // TODO merge les safe et unsafe
    const mergedProps = mergeUnsafeProperties(props);
    return <Box {...mergedProps} />
}

function mergeUnsafeProperties(props: StrictSystemProperties): SystemProperties  {
    return Object.keys(props).reduce<Record<string, unknown>>((acc, key) => {
        if (key.startsWith(UnsafePrefix)) {
            const safeKey = key.replace(UnsafePrefix, "");
            acc[safeKey] = acc[safeKey] ?? (props as Record<string,unknown>)[key];
        } else {
            acc[key] = (props as Record<string,unknown>)[key]
        }
        return acc;
    }, {}) as SystemProperties
}