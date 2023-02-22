import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Comment_Table from '../components/protein_detail_comment_table'
import BarChart from '../components/barChart_protein_detail'
import { maxWidth } from '@mui/system';
import NightingaleNavigation from '@nightingale-elements/nightingale-navigation';
import NightingaleSequence from '@nightingale-elements/nightingale-sequence';
import NightingaleManager from '@nightingale-elements/nightingale-manager';
import NightingaleColouredSequence from '@nightingale-elements/nightingale-coloured-sequence';
import NightingaleInterproTrack from '@nightingale-elements/nightingale-interpro-track';
import ProtvistaSequence from 'protvista-sequence';
import ProtvistaStructure from "protvista-structure";
import ProtvistaTrack from "protvista-track";
import DataLoader from "data-loader";
import ProtvistaFeatureAdapter  from 'protvista-feature-adapter';
import ProtvistaManager from 'protvista-manager';
import ProtvistaColorSequence from 'protvista-coloured-sequence';
import ProtvistaNavigation from 'protvista-navigation';
import NightingaleLinegraphTrack from 'nightingale-linegraph-track';
import ProtvistaInterproTrack from 'protvista-interpro-track';


const th = {
    background: '#f2f2f2',
    textAlign:'center',
    border: "1px solid #aaa",
    fontWeight:'bold',
    fontSize:'20px',
    padding:'0.2em',
    maxWidth:'1000px',
};

const td = {
    border: "1px solid #aaa",
    fontSize:'18px',
    padding:'0.2em',
    fontSize:'18px',

};

const sequence="MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAViAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP";

const protein_detail = () => {
  return (
    <>
    <div style={{margin:'20px'}}>
        <h2 style={{color:'black', marginBottom:'20px'}}>Salivary acidic proline-rich phosphoprotein 1/2 [Homo sapiens]</h2>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold'}}>Names and Origin</h2>
        <TableContainer component={Paper} style={{padding:'10px'}}>
            <Table sx={{minWidth:650}} aria-label="simple table" style={{border: "1px solid black"}}>
                <TableHead>
                    <TableRow sx={{border: "1px solid black"}}>
                        <TableCell sx={th}>Protein names</TableCell>
                        <TableCell sx={td}>
                            <p style={{color:'black',textAlign:'left'}}>
                                <i>Official name:</i>
                            </p>

                            Salivary acidic proline-rich phosphoprotein 1/2
                            <p style={{color:'black',textAlign:'left'}}><i>Alternative name(s):</i></p>

                            Db-s, PRP-1/PRP-2, Parotid acidic protein, Pa, Parotid double-band protein, Parotid isoelectric focusing variant protein, PIF-S, Parotid proline-rich protein 1/2, Pr1/Pr2, Protein C
                            <p style={{color:'black',textAlign:'left'}}><i>Cleaved into the following chains:</i></p>

                            Salivary acidic proline-rich phosphoprotein 1/2
                            <br></br>
                            Salivary acidic proline-rich phosphoprotein 3/4 (Db-F,PIF-F,PRP-3/PRP-4,Protein A)
                            <br></br>
                            Peptide P-C
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Genes</TableCell>
                        <TableCell sx={td}>
                            1. PRH1<a style={{color:'/*#116988*/#0b5989'}} href='https://salivaryproteome.org/public/index.php/EntrezGene:5554'>EntrezGene:5554</a>
                            <br></br>
                            2. PRH2<a style={{color:'/*#116988*/#0b5989'}} href='https://salivaryproteome.org/public/index.php/EntrezGene:5555'>EntrezGene:5555</a></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Organism</TableCell>
                        <TableCell sx={td}><a style={{color:'/*#116988*/#0b5989'}} href='http://salivaryproteome.org/public/index.php/Special:Ontology_Term/NEWT:9606'>	
Homo sapiens</a></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Taxonomy</TableCell>
                        <TableCell sx={td}>Eukaryota {'>'} Opisthokonta {'>'} Metazoa {'>'} Eumetazoa {'>'} Bilateria {'>'} Deuterostomia {'>'} Chordata {'>'} Craniata {'>'} Vertebrata {'>'} Gnathostomata {'>'} Teleostomi {'>'} Euteleostomi {'>'} Sarcopterygii {'>'} Dipnotetrapodomorpha {'>'} Tetrapoda {'>'} Amniota {'>'} Mammalia {'>'} Theria {'>'} Eutheria {'>'} Boreoeutheria {'>'} Euarchontoglires {'>'} Primates {'>'} Haplorrhini {'>'} Simiiformes {'>'} Catarrhini {'>'} Hominoidea {'>'} Hominidae {'>'} Homininae {'>'} Homo</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Sequence Attributes</h2>
        <Table style={{width:'80%'}}>
            <TableHead>
                <TableRow>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Has_accession_number'>Identifier</a></TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Name</a></TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Aliases</a></TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Sequence length</a></TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Molecular mass</a></TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Sequence</a></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>P02810-1</TableCell>
                    <TableCell>Canonical sequence	</TableCell>
                    <TableCell></TableCell>
                    <TableCell>166</TableCell>
                    <TableCell>17016.5</TableCell>
                    <TableCell><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/HSPW:PE90567/1'>HSPW:PE90567/1
</a></TableCell>
                </TableRow>
            </TableHead>
        </Table>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Comments</h2>
        <Comment_Table />
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Features</h2>
        <nightingale-manager>
                <nightingale-navigation length="50" display-start="1" display-end="32" highlight="1:32" rulerstart="1" height="30"/>
                <nightingale-sequence
  sequence="SEQUENCESEQUENCESEQUENCESEQUENCE"
  width="800"
  height="30"
  length="32"
  display-start="10"
  display-end="20"
  highlight="3:15"
  id="my-nightingale-sequence-id"> 
                </nightingale-sequence>

                <nightingale-coloured-sequence
                    sequence="SEQUENCESEQUENCESEQUENCESEQUENCE"
  width="800"
  height="30"
  length="32"
  display-start="10"
  display-end="20"
  highlight="3:15"
  scale="hydrophobicity-scale"
></nightingale-coloured-sequence>
        </nightingale-manager>
        <h4>protvista</h4>
        <protvista-manager attributes="length displaystart displayend variantfilters highlight" displaystart="1" displayend="100" id="example">
            <protvista-navigation length="770" />
            <protvista-sequence length="223" sequence={sequence} />
            <protvista-coloured-sequence length="770" scale="hydrophobicity-interface-scale" sequence={sequence}/>
            <protvista-coloured-sequence length="770" scale="isoelectric-point-scale" color_range="white:0,dodgerblue:11" sequence={sequence}/>
            <protvista-track length="770">
                <protvista-feature-adapter id="adapter1">
                    <data-loader>
                        <source src="https://www.ebi.ac.uk/proteins/api/features/P05067?categories=PTM" />
                    </data-loader>
                </protvista-feature-adapter>
            </protvista-track>  
            <protvista-interpro-track length="770" start="34" end="400"></protvista-interpro-track>
            <nightingale-linegraph-track id="track" width="770" length="5">
                <protvista-feature-adapter id="adapter1">
                    <data-loader>
                        <source src="https://www.ebi.ac.uk/proteins/api/features/P05067?categories=PTM" />
                    </data-loader>
                </protvista-feature-adapter>
            </nightingale-linegraph-track>
        </protvista-manager>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Glycans</h2>
        <p style={{color:'black', marginBottom:'20px', marginTop:'20px',fontSize:'16px',textAlign:'left'}}>There are currently no glycans associated with the protein.</p>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Expression</h2>
        <p style={{color:'black', marginBottom:'20px', marginTop:'20px',fontSize:'16px',textAlign:'left'}}>
            Abundance and localization of gene products based on both RNA and immunohistochemistry data from the <a href='http://www.proteinatlas.org/ENSG00000134551'>Human Protein Atlas</a>. Click on the tissue names to view primary data.
        </p>
        <BarChart />
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Proteomics</h2>
        <Table style={{width:'80%'}}>
            <TableHead>
                <TableRow>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Tissue ID</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Tissue Term</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Disease State</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Isoform</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Experiment Count</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Peptide Count</TableCell>
                    <TableCell style={{borderBottom: "2px solid #116988"}}>Abundance Score</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><a href='https://salivaryproteome.org/community/index.php/Special:Ontology_Term/BTO:0001202'>BTO:0001202</a></TableCell>
                    <TableCell>Saliva</TableCell>
                    <TableCell>Disease free<br></br>Sjogren's Syndrome<br></br>COVID-19</TableCell>
                    <TableCell>50<br></br>2<br></br>8</TableCell>
                    <TableCell>133<br></br>2870<br></br>24</TableCell>
                    <TableCell>430.74<br></br>1008.23<br></br>0</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><a href='https://salivaryproteome.org/community/index.php/Special:Ontology_Term/BTO:0001316'>BTO:0001316</a></TableCell>
                    <TableCell>Submandibular gland</TableCell>
                    <TableCell>Disease free</TableCell>
                    <TableCell>49</TableCell>
                    <TableCell>2442</TableCell>
                    <TableCell>13513.97</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><a href='https://salivaryproteome.org/community/index.php/Special:Ontology_Term/BTO:0001315'>BTO:0001315</a></TableCell>
                    <TableCell>Sublingual gland</TableCell>
                    <TableCell>Disease free</TableCell>
                    <TableCell>49</TableCell>
                    <TableCell>2442</TableCell>
                    <TableCell>14,385.84</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><a href='https://salivaryproteome.org/community/index.php/Special:Ontology_Term/BTO:0001004'>BTO:0001004</a></TableCell>
                    <TableCell>Parotid gland</TableCell>
                    <TableCell>Disease free</TableCell>
                    <TableCell>56</TableCell>
                    <TableCell>1208</TableCell>
                    <TableCell>3,127.74</TableCell>
                </TableRow>
            </TableHead>
        </Table>
        <h2 style={{color:'black', marginBottom:'20px', fontWeight:'bold',marginTop:'20px'}}>Cross References</h2>
        <TableContainer component={Paper} style={{padding:'10px'}}>
            <Table sx={{minWidth:650}} aria-label="simple table" style={{border: "1px solid black"}}>
                <TableHead>
                    <TableRow sx={{border: "1px solid black"}}>
                        <TableCell sx={th}>RefSeq</TableCell>
                        <TableCell sx={td} style={{maxWidth:'100%'}}>
                            <p style={{color:'black',textAlign:'left',fontSize:'18px'}}>
                                <a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NP_001103683.1'>NP_001103683.1</a>,<a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NM_001110213.1'>NM_001110213.1</a>,<a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NP_001278243.1'>NP_001278243.1</a>,<a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NM_001291314.1'>NM_001291314.1</a>,<a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NP_001278244.1'>NP_001278244.1</a>,
                                <a href='https://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&id=NM_001291315.1'>NM_001291315.1</a>
                            </p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>PeptideAtlas</TableCell>
                        <TableCell sx={td}>
                            <a href='https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas/Search?action=GO&search_key=P02810'>P02810</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Ensembl</TableCell>
                        <TableCell sx={td} style={{maxWidth:'100%'}}>
                            <p style={{color:'black',textAlign:'left',fontSize:'18px'}}>
                                <a href='http://www.ensembl.org/id/ENST00000381847.7'>ENST00000381847.7</a>, <a href='http://www.ensembl.org/id/ENSP00000371271.3'>ENSP00000371271.3</a>, <a href='http://www.ensembl.org/id/ENSG00000134551.13'>ENSG00000134551.13</a>,<a href='http://www.ensembl.org/id/ENST00000396400.4'>ENST00000396400.4</a>,<a href='http://www.ensembl.org/id/ENSP00000379682.3'>ENSP00000379682.3</a>, <a href='http://www.ensembl.org/id/ENST00000572141.1'>ENST00000572141.1</a>, <a href='http://www.ensembl.org/id/ENSP00000458690.1'>ENSP00000458690.1</a>, <a href='http://www.ensembl.org/id/ENSG00000272803.5'>ENSG00000272803.5</a>, <a href='http://www.ensembl.org/id/ENST00000575657.5'>ENST00000575657.5</a>,<a href='http://www.ensembl.org/id/ENSP00000461041.1'>ENSP00000461041.1</a>,<a href='http://www.ensembl.org/id/ENST00000622570.4'>ENST00000622570.4</a>, <a href='http://www.ensembl.org/id/ENSP00000481810.1'>ENSP00000481810.1</a>, <a href='http://www.ensembl.org/id/ENSG00000275679.4'>ENSG00000275679.4</a>,<a href='http://www.ensembl.org/id/ENST00000622848.2'>ENST00000622848</a>, <a href='http://www.ensembl.org/id/ENSP00000483458.1'>ENSP00000483458</a>
                           </p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>GeneCards</TableCell>
                        <TableCell sx={td}>
                            <a href='http://www.genecards.org/cgi-bin/carddisp.pl?gene=PRH1'>PRH1</a>,<a href ='http://www.genecards.org/cgi-bin/carddisp.pl?gene=PRH2'>PRH2</a>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
    </>
  );
};
  
export default protein_detail;
window.customElements.define("protvista-sequence", ProtvistaSequence);
window.customElements.define("protvista-structure", ProtvistaStructure);
window.customElements.define("protvista-track", ProtvistaTrack);
window.customElements.define("data-loader", DataLoader);
window.customElements.define("protvista-feature-adapter", ProtvistaFeatureAdapter);
window.customElements.define("protvista-manager",ProtvistaManager);
window.customElements.define("protvista-coloured-sequence",ProtvistaColorSequence);
window.customElements.define("protvista-navigation",ProtvistaNavigation);
window.customElements.define("nightingale-linegraph-track",NightingaleLinegraphTrack);
window.customElements.define("protvista-interpro-track",ProtvistaInterproTrack);
