import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery';

import aquaforest from './images/aquaforest.JPG';
import calico_scarlet from './images/calico_scarlet.JPG';
import espresso_violet from './images/espresso_violet.JPG';
import fern_camarone_fern from './images/fern_camarone_fern.JPG';
import fuchsiapink from './images/fuchsiapink.JPG';
import fuchsiapink_crusta from './images/fuchsiapink_crusta.JPG';
import geraldine_turmeric from './images/geraldine_turmeric.JPG';
import green_christalle from './images/green_christalle.JPG';
import green_funblue from './images/green_funblue.JPG';
import green_greenhaze from './images/green_greenhaze.JPG';
import husk from './images/husk.JPG';
import madang_toledo_hairyheath from './images/madang_toledo_hairyheath.JPG';
import mandy_scarlet from './images/mandy_scarlet.JPG';
import matisse from './images/matisse.JPG';
import orange from './images/orange.JPG';
import peach_rosebud from './images/peach_rosebud.JPG';
import perano from './images/perano.JPG';
import pineglade_deyork from './images/pineglade_deyork.JPG';
import plum_black from './images/plum_black.JPG';
import purple from './images/purple.JPG';
import scarlet from './images/scarlet.JPG';
import seagull from './images/seagull.JPG';
import sunflower_orange_sunflower from './images/sunflower_orange_sunflower.JPG';
import sushi_woodland from './images/sushi_woodland.JPG';
import turmeric from './images/turmeric.JPG';
import turmeric_torchred from './images/turmeric_torchred.JPG';
import white_black from './images/white_black.JPG';
import yellow from './images/yellow.JPG';
import yellow_green_turquoise from './images/yellow_green_turquoise.JPG';
import yellow_rope_yellow from './images/yellow_rope_yellow.JPG';
import yellow_tabasco from './images/yellow_tabasco.JPG';
import yellow_toledo from './images/yellow_toledo.JPG';
import yellow_zest_turmeric from './images/yellow_zest_turmeric.JPG';

class TestResult extends React.Component {
	render() {
		return (
			<div>
			</div>
		);
	}
}

class AddTest extends React.Component {
	render() {
		const inputTests = this.props.inputTests;
		return (
			<div>
				<button type="button" class="btn btn-primary btn-sm"><i class="icon-plus"></i></button>
			</div>
		);
	}
}

class TestOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.handleInputTestChange = this.handleInputTestChange.bind(this);
		this.handleInputResultChange = this.handleInputResultChange.bind(this);
	}

	handleInputTestChange = (e, { value }) => {
		if(value == 'marquis') {
			this.setState({
			  value: 1
			});
		}
		else if(value == 'mandelin') {
			this.setState({
			  value: 2
			});
		}
		else if(value == 'mecke') {
			this.setState({
			  value: 3
			});
		}
		else if(value == 'simons') {
			this.setState({
			  value: 4
			});
		}
		else if(value == 'robatest') {
			this.setState({
			  value: 5
			});
		}
		this.props.inputTests[this.props.testNumber] = value;
		this.props.onInputTestChange(this.props.inputTests, this.props.testNumber);
	}
	  
	
	handleInputResultChange = (e, { value }) => {
		this.props.inputResults[this.props.testNumber] = value;
		this.props.onInputResultChange(this.props.inputResults, this.props.testNumber);	
	};
	
	render() {
		const inputTests = this.props.inputTests;
		const inputResults = this.props.inputResults;
		const testNumber = this.props.testNumber;
		const tempTest = '';
		const tempResult = '';
	
		return (
			<div>
				<div class="container">
					<div class="row">
						<div class="col-sm-8">
						{/*<label>Reagent</label>*/}
						</div>
						<div class="col-sm-4">
						{/*<button type="button" class="close">&times;</button>*/}
						</div>
					</div>
					<div class="row">
						<Dropdown 
						 placeholder='Reagent'
						 name="reagent_selection"
						 onChange={this.handleInputTestChange}
						 selection 
						 options={testOptions} 
						 />
					</div>
					<div class="row">
						<Dropdown 
						 placeholder='Reaction Colour'
						 name="colour_selection"
						 onChange={this.handleInputResultChange}
						 selection 
						 options={testOptions[this.state.value].colours} 
						 />
					</div>
				</div>
			</div>
		);
	}
}

class Substance extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

class InputArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputTests: [testOptions[0], testOptions[0], testOptions[0], testOptions[0]],
			inputResults: [COLOURS[0], COLOURS[0], COLOURS[0], COLOURS[0]]
		};
		this.handleInputTestChange = this.handleInputTestChange.bind(this);
		this.handleInputResultChange = this.handleInputResultChange.bind(this);
	}
	
	previousTestFiltered(product) {
		if(product.marquis[1]) {
			return true;
		}
		if(product.mandelin[1]) {
			return true;
		}
		if(product.mecke[1]) {
			return true;
		}
		if(product.simons[1]) {
			return true;
		}
		if(product.robatest[1]) {
			return true;
		}
		return false;
	}
	
	checkColours(inputTest, inputColour) {
		
		for(var i=0; i<inputTest[0].length; i++) {
			if(inputTest[0][i] == inputColour) {
				return true;
			}
		}
		return false;
	}
	
	handleInputTestChange(inputTests, testNumber) {
		this.setState({
		  inputTests: inputTests
		});
		if(this.state.inputResults[testNumber] !== '-') {
			SUBSTANCES.forEach((product) => {
				if(this.state.inputTests[testNumber] === 'marquis') {
					if(this.checkColours(product.marquis, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
						product.filter = false;
					}
					else {
						product.filter = true;
						product.marquis[1] = true;
					}
				}
				else if(this.state.inputTests[testNumber] === 'mandelin') {
					product.mandelin[0].forEach((colour) => {
						if(this.checkColours(product.mandelin, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.mandelin[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'mecke') {
					product.mecke[0].forEach((colour) => {
						if(this.checkColours(product.mecke, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.mecke[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'simons') {
					product.simons[0].forEach((colour) => {
						if(this.checkColours(product.simons, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.simons[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'robatest') {
					product.robatest[0].forEach((colour) => {
						if(this.checkColours(product.robatest, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.robatest[1] = true;
						}
					});
				}
			});
		}
	}
	
	handleInputResultChange(inputResults, testNumber) {
		this.setState({
		  inputResults: inputResults
		});
		if(this.state.inputTests[testNumber] !== '-') {
			SUBSTANCES.forEach((product) => {
				if(this.state.inputTests[testNumber] === 'marquis') {
					if(this.checkColours(product.marquis, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
						product.filter = false;
					}
					else {
						product.filter = true;
						product.marquis[1] = true;
					}
				}
				else if(this.state.inputTests[testNumber] === 'mandelin') {
					product.mandelin[0].forEach((colour) => {
						if(this.checkColours(product.mandelin, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.mandelin[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'mecke') {
					product.mecke[0].forEach((colour) => {
						if(this.checkColours(product.mecke, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.mecke[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'simons') {
					product.simons[0].forEach((colour) => {
						if(this.checkColours(product.simons, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.simons[1] = true;
						}
					});
				}
				else if(this.state.inputTests[testNumber] === 'robatest') {
					product.robatest[0].forEach((colour) => {
						if(this.checkColours(product.robatest, this.state.inputResults[testNumber]) && !this.previousTestFiltered(product)) {
							product.filter = false;
						}
						else {
							product.filter = true;
							product.robatest[1] = true;
						}
					});
				}
			});
		}
	}
	
	render() {
		return (
			<div>
				<div class="container">
					<form action="">
						<div class="form-group">
							<div class="row">
								<div class="col-sm-3">
									<TestOption inputTests={this.state.inputTests} inputResults={this.state.inputResults} testNumber={0} onInputTestChange={this.handleInputTestChange} onInputResultChange={this.handleInputResultChange} />
								</div>
								<div class="col-sm-3">
									<TestOption inputTests={this.state.inputTests} inputResults={this.state.inputResults} testNumber={1} onInputTestChange={this.handleInputTestChange} onInputResultChange={this.handleInputResultChange} />
								</div>
								<div class="col-sm-3">
									<TestOption inputTests={this.state.inputTests} inputResults={this.state.inputResults} testNumber={2} onInputTestChange={this.handleInputTestChange} onInputResultChange={this.handleInputResultChange} />
								</div>
								<div class="col-sm-3">
									<TestOption inputTests={this.state.inputTests} inputResults={this.state.inputResults} testNumber={3} onInputTestChange={this.handleInputTestChange} onInputResultChange={this.handleInputResultChange} />
								</div>
								<div class="col-sm-3">
								{/*<AddTest inputTests={this.state.inputTests} inputResults={this.state.inputResults} />*/}
								</div>
								<div class="col-sm-4">
									<SubstanceList inputTests={this.state.inputTests} inputResults={this.state.inputResults} />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

class SubstanceList extends React.Component {
	render() {
		const inputTests = this.props.inputTests;
		const inputResults = this.props.inputResults;
		const rows = [];
		let lastName = null;
		
		SUBSTANCES.forEach((product) => {
			if(product.filter === false) {
				rows.push(
					<Substance
					name={product.name} />
				);
			}
		  //lastName = product.name;
		});
		return (
			<div>
			<h2>Possible Answers</h2>
			<p>{rows}</p>
			</div>
		);
	}
}

class AboutInformation extends React.Component {
	render() {
		return (
			<div>
				<h2>About</h2>
				<p>This is the first ever live version &#128576; <br />
				soooo.... there's going to be a <s>few</s> <ins>metric tonne of</ins> issues.<br /><br />
				The issues that I know about and am trying to fix are:</p>
				<ul>
					<li>There's not many reagent tests to choose from.</li>
					<li>There's not a whole lot of posible substance to look at.<br />
					If a substance isn't originally on the list, then <b>assume it's a possible substance after using this app!</b>
					</li>
					<li>After making a selection, the possible substances won't update itself if you change that selection.<br />
					For now, refresh the page and set the options over again if you make a mistake to overcome this problem.
					</li>
				</ul>
				<p>If you find any more please send your <s>hate mail</s> <ins>helpful suggestions</ins> to <a href="mailto:reagent.test@protonmail.com">reagent.test@protonmail.com</a><br /><br />
				Please note that I don't endorse purchasing or consuming any substance found on this list. 
				Also, reagent testing isn't 100% safe but it is mildly safer than not reagent testing. The safest 
				thing you could do is being a good Chistian kid and go to church instead of doing drugs. But for those
				who aren't good Chistian kids all I can say is...<b>party safe and look after your mates!</b></p>
			</div>
		);
	}
}

class Heading extends React.Component {
	render() {
		return (
			<div class="mx-auto">
				<h1>Reagent Test</h1>
			</div>
		);
	}
}

class CalculationTable extends React.Component {
	render() {
		return (
			<div>
				<div class="container">
					<div class="row">
						<div class="col-lg">
							<Heading />
							<div class="row">
								<InputArea />
							</div>
						</div>
						<div class="col-sm-3">
							<AboutInformation />
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

class App extends React.Component {
	render() {
	  return (
		<div className="App">
		  <CalculationTable />
		</div>
	  );
	}
}


const SUBSTANCES = [
{name: 'MDMA or MDED',
marquis: [['plum_black'], false, ''],		// [Colour reaction, whether it's been filtered from a previous test within the app, extra information about this particular reaction]
mandelin: [['plum_black'], false, ''],
mecke: [['green_christalle'], false, ''],
simons: [['matisse'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'MDA',
marquis: [['plum_black'], false, ''],
mandelin: [['plum_black'], false, ''],
mecke: [['green_christalle'], false, ''],
simons: [['none'], false, ''],
robatest: [['geraldine_turmeric'], false, ''],
filter: false},

{name: 'MDMA or MDEA+Methamphetamine',
marquis: [['yellow_toledo'], false, ''],
mandelin: [['plum_black'], false, ''],
mecke: [['green_christalle'], false, ''],
simons: [['matisse'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'Methamphetamine',
marquis: [['yellow_tabasco'], false, ''],
mandelin: [['green_greenhaze'], false, ''],
mecke: [['none'], false, ''],
simons: [['matisse'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'Amphetamine',
marquis: [['yellow_tabasco'], false, ''],
mandelin: [['green_greenhaze'], false, ''],
mecke: [['none'], false, ''],
simons: [['none'], false, ''],
robatest: [['geraldine_turmeric'], false, ''],
filter: false},

{name: 'Methylone (bk-MDMA)',
marquis: [['yellow'], false, ''],
mandelin: [['turmeric_torchred'], false, ''],
mecke: [['yellow_zest_turmeric'], false, ''],
simons: [['seagull'], false, ''],
robatest: [['husk'], false, ''],
filter: false},

{name: 'Methedrone (4-MMC)',
marquis: [['none', 'yellow'], false, ''],
mandelin: [['turmeric'], false, ''],
mecke: [['none'], false, ''],
simons: [['perano'], false, ''],
robatest: [['geraldine_turmeric'], false, ''],
filter: false},

{name: 'LSD',
marquis: [['orange'], false, ''],
mandelin: [['none'], false, ''],
mecke: [['none', 'green_greenhaze'], false, ''],
simons: [[''], false, ''],
robatest: [[''], false, ''],
filter: false},

{name: 'Ketamine',
marquis: [['none'], false, ''],
mandelin: [['scarlet'], false, ''],
mecke: [['none'], false, ''],
simons: [['none'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'Opiates',
marquis: [['fuchsiapink'], false, ''],
mandelin: [['aquaforest'], false, ''],
mecke: [['green_funblue'], false, ''],
simons: [['none'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: '2C-B',
marquis: [['yellow_green_turquoise'], false, ''],
mandelin: [['yellow'], false, ''],
mecke: [['sushi_woodland'], false, ''],
simons: [['none'], false, ''],
robatest: [['purple'], false, ''],
filter: false},

{name: '2C-T-7',
marquis: [['none'], false, ''],
mandelin: [['peach_rosebud'], false, ''],
mecke: [['espresso_violet'], false, ''],
simons: [['purple'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'DXM',
marquis: [['white_black'], false, ''],
mandelin: [['pineglade_deyork'], false, ''],
mecke: [['yellow_rope_yellow'], false, ''],
simons: [['none'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'PMA',
marquis: [['none'], false, ''],
mandelin: [['yellow_toledo'], false, ''],
mecke: [['fern_camarone_fern'], false, ''],
simons: [['none'], false, ''],
robatest: [['scarlet'], false, ''],
filter: false},

{name: 'PMMA',
marquis: [['none'], false, ''],
mandelin: [['yellow_toledo'], false, ''],
mecke: [['fern_camarone_fern'], false, ''],
simons: [['matisse'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'Piperazines',
marquis: [['none'], false, ''],
mandelin: [['none'], false, ''],
mecke: [['none'], false, ''],
simons: [['none', 'perano'], false, ''],
robatest: [['none'], false, ''],
filter: false},

{name: 'Strychnine',
marquis: [['none'], false, ''],
mandelin: [['fuchsiapink_crusta'], false, ''],
mecke: [['none'], false, ''],
simons: [[''], false, ''],
robatest: [[''], false, ''],
filter: false},

{name: 'Cocaine',
marquis: [['none'], false, ''],
mandelin: [['sunflower_orange_sunflower'], false, ''],
mecke: [['none'], false, ''],
simons: [['none'], false, ''],
robatest: [[''], false, ''],
filter: false}
];

const COLOURS = ['-', 'none', 'aquaforest', 'calico_scarlet', 'espresso_violet', 'fern_camarone_fern', 'fuchsiapink', 'fuchsiapink_crusta', 'geraldine_turmeric', 'green_christalle', 'green_funblue', 'green_greenhaze', 'husk', 'madang_toledo_hairyheath', 'mandy_scarlet', 'matisse', 'orange', 'peach_rosebud', 'perano', 'pineglade_deyork', 'plum_black', 'purple', 'scarlet', 'seagull', 'sushi_woodland', 'turmeric', 'turmeric_torchred', 'white_black', 'yellow', 'yellow_green_turquoise', 'yellow_rope_yellow', 'yellow_tabasco', 'yellow_toledo', 'yellow_zest_turmeric', 'sunflower_orange_sunflower'];
const TESTS = ['-', 'marquis', 'mandelin', 'mecke', 'simons', 'robatest'];

const reactionOptions = [
  {
    key: COLOURS[1],
    text: COLOURS[1],
    value: COLOURS[1],
    
  },
  {
    key: COLOURS[2],
    value: COLOURS[2],
    image: { avatar: false, src: aquaforest },
  },
  {
    key: COLOURS[3],
    value: COLOURS[3],
    image: { avatar: false, src: calico_scarlet },
  },
  {
    key: COLOURS[4],
    value: COLOURS[4],
    image: { avatar: false, src: espresso_violet },
  },
  {
    key: COLOURS[5],
    value: COLOURS[5],
    image: { avatar: false, src: fern_camarone_fern },
  },
  {
    key: COLOURS[6],
    value: COLOURS[6],
    image: { avatar: false, src: fuchsiapink },
  },
  {
    key: COLOURS[7],
    value: COLOURS[7],
    image: { avatar: false, src: fuchsiapink_crusta },
  },
  {
    key: COLOURS[8],
    value: COLOURS[8],
    image: { avatar: false, src: geraldine_turmeric },
  },
  {
    key: COLOURS[9],
    value: COLOURS[9],
    image: { avatar: false, src: green_christalle },
  },
  {
    key: COLOURS[10],
    value: COLOURS[10],
    image: { avatar: false, src: green_funblue },
  },
  {
    key: COLOURS[11],
    value: COLOURS[11],
    image: { avatar: false, src: green_greenhaze },
  },
  {
    key: COLOURS[12],
    value: COLOURS[12],
    image: { avatar: false, src: husk },
  },
  {
    key: COLOURS[13],
    value: COLOURS[13],
    image: { avatar: false, src: madang_toledo_hairyheath },
  },
  {
    key: COLOURS[14],
    value: COLOURS[14],
    image: { avatar: false, src: mandy_scarlet },
  },
  {
    key: COLOURS[15],
    value: COLOURS[15],
    image: { avatar: false, src: matisse },
  },
  {
    key: COLOURS[16],
    value: COLOURS[16],
    image: { avatar: false, src: orange },
  },
  {
    key: COLOURS[17],
    value: COLOURS[17],
    image: { avatar: false, src: peach_rosebud },
  },
  {
    key: COLOURS[18],
    value: COLOURS[18],
    image: { avatar: false, src: perano },
  },
  {
    key: COLOURS[19],
    value: COLOURS[19],
    image: { avatar: false, src: pineglade_deyork },
  },
  {
    key: COLOURS[20],
    value: COLOURS[20],
    image: { avatar: false, src: plum_black },
  },
  {
    key: COLOURS[21],
    value: COLOURS[21],
    image: { avatar: false, src: purple },
  },
  {
    key: COLOURS[22],
    value: COLOURS[22],
    image: { avatar: false, src: scarlet },
  },
  {
    key: COLOURS[23],
    value: COLOURS[23],
    image: { avatar: false, src: seagull },
  },
  {
    key: COLOURS[24],
    value: COLOURS[24],
    image: { avatar: false, src: sushi_woodland },
  },
  {
    key: COLOURS[25],
    value: COLOURS[25],
    image: { avatar: false, src: turmeric },
  },
  {
    key: COLOURS[26],
    value: COLOURS[26],
    image: { avatar: false, src: turmeric_torchred },
  },
  {
    key: COLOURS[27],
    value: COLOURS[27],
    image: { avatar: false, src: white_black },
  },
  {
    key: COLOURS[28],
    value: COLOURS[28],
    image: { avatar: false, src: yellow },
  },
  {
    key: COLOURS[29],
    value: COLOURS[29],
    image: { avatar: false, src: yellow_green_turquoise },
  },
  {
    key: COLOURS[30],
    value: COLOURS[30],
    image: { avatar: false, src: yellow_rope_yellow },
  },
  {
    key: COLOURS[31],
    value: COLOURS[31],
    image: { avatar: false, src: yellow_tabasco },
  },
  {
    key: COLOURS[32],
    value: COLOURS[32],
    image: { avatar: false, src: yellow_toledo },
  },
  {
    key: COLOURS[33],
    value: COLOURS[33],
    image: { avatar: false, src: yellow_zest_turmeric },
  },
  {
    key: COLOURS[34],
    value: COLOURS[34],
    image: { avatar: false, src: sunflower_orange_sunflower },
  }
]

const testOptions = [
  {
    key: TESTS[0],
    text: TESTS[0],
    value: TESTS[0],
	colours: reactionOptions
  },
  {
    key: TESTS[1],
    text: TESTS[1],
    value: TESTS[1],
	colours: [reactionOptions[0],
			reactionOptions[19],
			reactionOptions[31],
			reactionOptions[30],
			reactionOptions[27],
			reactionOptions[15],
			reactionOptions[5],
			reactionOptions[28],
			reactionOptions[26]]
  },
  {
    key: TESTS[2],
    text: TESTS[2],
    value: TESTS[2],
	colours: [reactionOptions[0],
			reactionOptions[19],
			reactionOptions[10],
			reactionOptions[25],
			reactionOptions[24],
			reactionOptions[21],
			reactionOptions[1],
			reactionOptions[27],
			reactionOptions[16],
			reactionOptions[18],
			reactionOptions[31],
			reactionOptions[6],
			reactionOptions[33]
			]
  },
  {
    key: TESTS[3],
    text: TESTS[3],
    value: TESTS[3],
	colours: [reactionOptions[0],
			reactionOptions[8],
			reactionOptions[32],
			reactionOptions[10],
			reactionOptions[9],
			reactionOptions[23],
			reactionOptions[3],
			reactionOptions[29],
			reactionOptions[4]
			]
  },
  {
    key: TESTS[4],
    text: TESTS[4],
    value: TESTS[4],
	colours: [reactionOptions[0],
			reactionOptions[14],
			reactionOptions[22],
			reactionOptions[17],
			reactionOptions[20]
			]
  },
  {
    key: TESTS[5],
    text: TESTS[5],
    value: TESTS[5],
	colours: [reactionOptions[0],
			reactionOptions[7],
			reactionOptions[11],
			reactionOptions[20],
			reactionOptions[21]]
  }
]

export default App;
