import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const th = {
    background: '#f2f2f2',
    textAlign:'center',
    border: "1px solid #aaa",
    fontWeight:'bold',
    fontSize:'20px',
    padding:'0.2em'
};

const td = {
    border: "1px solid #aaa",
    fontSize:'18px',
    padding:'0.2em',
    fontSize:'18px'
};

const gene_detail = () => {
  return (
    <>
    <div style={{margin:'20px'}}>
        <h2 style={{color:'black', marginBottom:'20px'}}>A1BG alpha-1-B glycoprotein [Homo sapiens]</h2>
        <TableContainer component={Paper} style={{padding:'10px'}}>
            <Table sx={{minWidth:650}} aria-label="simple table" style={{border: "1px solid black"}}>
                <TableHead>
                    <TableRow sx={{border: "1px solid black"}}>
                        <TableCell sx={th}>Aliases</TableCell>
                        <TableCell sx={td}>A1B, ABG, DKFZp686F0970, GAB, HYST2477</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Organism</TableCell>
                        <TableCell sx={td}><a style={{color:'/*#116988*/#0b5989'}} href='http://salivaryproteome.org/public/index.php/Special:Ontology_Term/NEWT:9606'>Homo sapiens</a></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Taxonomic lineage</TableCell>
                        <TableCell sx={td}>Eukaryota {'>'} Opisthokonta {'>'} Metazoa {'>'} Eumetazoa {'>'} Bilateria {'>'} Deuterostomia {'>'} Chordata {'>'} Craniata {'>'} Vertebrata {'>'} Gnathostomata {'>'} Teleostomi {'>'} Euteleostomi {'>'} Sarcopterygii {'>'} Dipnotetrapodomorpha {'>'} Tetrapoda {'>'} Amniota {'>'} Mammalia {'>'} Theria {'>'} Eutheria {'>'} Boreoeutheria {'>'} Euarchontoglires {'>'} Primates {'>'} Haplorrhini {'>'} Simiiformes {'>'} Catarrhini {'>'} Hominoidea {'>'} Hominidae {'>'} Homininae {'>'} Homo</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Chromosome location</TableCell>
                        <TableCell sx={td}>19q13.4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={th}>Summary</TableCell>
                        <TableCell sx={td}>	The protein encoded by this gene is a plasma glycoprotein of unknown function. The protein shows sequence similarity to the variable regions of some immunoglobulin supergene family member proteins. [provided by RefSeq]</TableCell>
                    </TableRow>
                    <TableRow sx={{border: "1px solid black"}}>
                        <TableCell sx={th}>Gene products</TableCell>
                        <TableCell style={td}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{border: "1px solid black"}}>
                                        <TableCell style={{border: "1px solid black"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Has_accession_number'>Accession Number</a></TableCell>
                                        <TableCell style={{border: "1px solid black"}}><a style={{color: '#116988'}} href='https://salivaryproteome.org/public/index.php/Property:Known_officially_as'>Protein Name</a></TableCell>
                                        <TableCell style={{border: "1px solid black", color: '#116988'}}>Link</TableCell>
                                    </TableRow>
                                    <TableRow style={{border: "1px solid black"}}>
                                        <TableCell style={{border: "1px solid black"}}>P04217</TableCell>
                                        <TableCell style={{border: "1px solid black"}}>Alpha-1B-glycoprotein</TableCell>
                                        <TableCell style={{border: "1px solid black"}}><a href='https://salivaryproteome.org/public/index.php/HSPW:PDE8DF3'>HSPW:PDE8DF3</a></TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{border: "1px solid black"}}>
                        <TableCell style={th}>Link</TableCell>
                        <TableCell style={td}><a href='https://www.ncbi.nlm.nih.gov/gene/1'>Entrez Gene</a></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
    </>
  );
};
  
export default gene_detail;