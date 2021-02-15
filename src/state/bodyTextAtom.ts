import { atom } from 'recoil'

export interface BodyTextTypes {
    bannerText: string;
    headerText: string;
};

const BodyTextAtom = atom<BodyTextTypes>({
    key: "bodyText",
    default: {
        bannerText: "Lorem ipsum",
        headerText: "dolor sit amet"
    }
});

export default BodyTextAtom;