import { atom } from 'recoil'

export interface BodyTextTypes {
    bannerText: string;
    headerText: string;
};

const BodyTextAtom = atom<BodyTextTypes>({
    key: "bodyText",
    default: {
        bannerText: "text",
        headerText: "t"
    }
});

export default BodyTextAtom;