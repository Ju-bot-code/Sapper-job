import { LoremIpsum } from "lorem-ipsum";


const lorem =new LoremIpsum();

export let jobs=[
    { id:1 ,title:"Apple picker" ,salary:20000, description:lorem.generateParagraphs(3)},
    { id:2 ,title:"Lawer" ,salary:30000, description:lorem.generateParagraphs(3)},
    { id:3 ,title:"Detective assisstant" ,salary:50000, description:lorem.generateParagraphs(3)}
];