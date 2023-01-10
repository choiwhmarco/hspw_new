import covid from "./covid.jpeg";
import main_feature from "./main-featured.png";
import salivary_protein from "./salivary_proteins.png";
import pubmed from "./pubmed-logo.png"
import hero from "./hero.jpeg"

export const images = [
  { title: "Welcome to the Human Salivary Proteome Wiki (HSPW)", subtitle: "HSPW is a collaborative, community-based Web portal to more than 1,000 unique human saliva proteins identified by high-throughput proteomic technologies. The wiki is developed for the research community and the public to harness the knowledge in the data and to further enhance the value of the proteome. You are very welcome to share your thoughts in the forums; add your own data to the growing database; annotate the proteins; or just explore the site.",subtitle1: "" , img:hero,
  },
  {
    title: "Salivary Protein Map",
    subtitle: 'The chord diagram on left provides salivary protein catalog with each arc in the diagram represents the set of proteins found in the connected tissue or sample types. Click on Chord image to go to salivary protein catalog page that provides the interactive chord diagram and salivary protein search capability.',
    img: hero,
  },
  {
    title: "SARS COVID-19",
    subtitle: "Our new JCVI covid-19 data is available.",
    img: covid,
  },
];
