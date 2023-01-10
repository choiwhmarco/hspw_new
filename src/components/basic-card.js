import React from 'react';
import './basic-card.css';

/*
	Renders a simple card element.
	
	Properties:
		rawContent (DOM node): Explicitly define the content of the box by passing the
			content to fill it out.  Top level element should have the class "basic-card-content".
			Defaults to null.
		destination (Boolean): Whether or not the card has a destination requiring a hover state.
			Defaults to false.
		size (Number): A number 1-4 describing how many columns the card should span.  The cards
			at the moment are based on a maximum of 4 columns, but additional styles in the CSS
			can expand this as necessary.
			Defaults to 1.
		imageSrc (string): The URL of an image to be placed at the top of the card.
			Defaults to ''.
		title (string): A title for the card which gets rendered as a header element.
			Defaults to ''.
		blurb (string): A short description to be loaded into the card.
			Defaults to ''.
*/

 const basicCards = [
    {
      imageSrc: iconFolder + 'icon-salivary-protein.png',
      title: 'Protein Search',
      blurb: 'Search for specific salivary proteins found in our database.'
    },
    {
      imageSrc: iconFolder + 'icon-analyze.png',
      title: 'Protein Analysis',
      blurb: 'Evaluate proteins, quantify abundance and perform statistics.'
    },
    {
      imageSrc: iconFolder + 'icon-upload.png',
      title: 'Upload Experiment',
      blurb: 'Upload experiment to the database. Files have to be in mzTab format.'
    },
    {
      imageSrc: iconFolder + 'icon-download.png',
      title: 'Download Datasets',
      blurb: 'Download datasets from database with protein abundance and sequence.'
    },
    {
      imageSrc: iconFolder + 'icon-pubmed.png',
      title: 'PubMed',
      blurb: 'Includes links to full text articles and other related resources.'
    },
    {
      imageSrc: iconFolder + 'icon-gene.png',
      title: 'Find Gene',
      blurb: 'A locatable region of genomic sequence, corresponding to a unit of inheritance.'
    },
    {
      imageSrc: iconFolder + 'icon-clustering.png',
      title: 'Cluster Search',
      blurb: 'Search clusters that share one or more common proteins are merged further.'
    },
    {
      imageSrc: iconFolder + 'icon-api.png',
      title: 'API',
      blurb: 'Allows access to the datasets by retrieving requested data in JSON format.'
    },
    {
      size: '2',
      destination: false,
      rawContent:
        <div className='basic-card-content basic-card-content-centered'>
          <h4>Statistics</h4>
          <ul className="bulletless">
            <li>7 Contributing Institutions</li>
            <li>7 Studies</li>
            <li>946 Datasets</li>
            <li>5 Tissue Types</li>
            <li>3 Diseases + Healthy Controls</li>
          </ul>
        </div>
    },
    {
      size: '2',
      destination: false,
      rawContent: 
        <div className="basic-card-content basic-card-content-centered embed-responsive" style={{height: '300px'}}>
          <iframe className="embed-responsive-item" src="https://youtube.com/embed/u4JN1FmLGE4" width="100%"></iframe>
        </div>
    },
    {
      size: '4',
      destination: false,
      rawContent:
        <div className='basic-card-content basic-card-content-centered'>
          <h4>Recent News</h4>
          <ul className="bulletless">
            <li>Bookmark our new URL: <a href="https://salivaryproteome.org/">https://salivaryproteome.org/</a></li>
            <li>Our new JCVI covid-19 data is available</li>
          </ul>
        </div>
    }
  ];
class BasicCard extends React.Component {
    
	render() {
		return (
			<div className="basic-card" data-size={this.props.size} data-destination={destination}>
				<div className='basic-card-content'>
					<div className="basic-card-image-wrapper">
						<img src={this.props.imageSrc} />
					</div>
					<h4>{ this.props.title }</h4>
					<p>{ this.props.blurb }</p>
				</div>
			</div>
		)
	};

}

export default BasicCard;