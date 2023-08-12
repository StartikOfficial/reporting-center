import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useMantineTheme, px } from "@mantine/core";
import useStyles from "./YandexMap.style";
import { useElementSize, useViewportSize } from "@mantine/hooks";
import getBreakPoints from "@/shared/utils/getBreakPoints";

function YandexMap() {
    const theme = useMantineTheme();
    const { yandexMapsContainer } = useStyles().classes;
    const { ref } = useElementSize();

    const viewportWidth = useViewportSize().width;

    const { desktopSM, tablet, mobile } = getBreakPoints(theme);

    function breakpointToNumber(breakpoint:string) {
        return +(breakpoint.slice(0,-2))*16;
    };
    
    function compareWidth(viewportWidth:number, breakpoint:string) {
        return viewportWidth >= breakpointToNumber(breakpoint);
    };

    function getHeight() {
        if (compareWidth(viewportWidth, desktopSM)) {

            return 725;
        };
        if (compareWidth(viewportWidth, tablet)) {

            return (678 + 0.2098214*(viewportWidth - breakpointToNumber(tablet)));
        };
        if (compareWidth(viewportWidth, mobile)) {
            
            return (320 + 0.799107*(viewportWidth - breakpointToNumber(mobile)));
        };
        return viewportWidth;
    };

    function getCenter() {
        if (compareWidth(viewportWidth, tablet)) {

            return [55.75848, 37.62759];
        };
        return [55.75844439393283,37.62623701574805];
    };

    return (
        <YMaps preload>
            <Map
            ref={ref}
            className={yandexMapsContainer}
            defaultState={{ 
                center: getCenter(), 
                zoom: 17 
                }}
            style={{
                height: getHeight(),
            }}
            >
                <Placemark geometry={[55.75844439393283,37.62623701574805]} />
            </Map>
        </YMaps>
    )
};

export default YandexMap;

