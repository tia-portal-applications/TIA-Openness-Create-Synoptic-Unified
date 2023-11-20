// const drawSynoptic = require('./Synoptic').drawSynoptic;

import { drawSynoptic } from './Synoptic.js';
import { assertEqual } from './testingFramework.js';

const AMOUNT_OF_SCREENITEMS = 20;
const faceplateContainers = [];
const polyLines = [];
for (let i = 0; i < AMOUNT_OF_SCREENITEMS; i++) {
  faceplateContainers.push({
    constructor: {name: 'HmiFaceplateContainer'},
    ContainedType: 'Step',
    Left: 0,
    Top: 0,
    Properties: {
      HmiTag: {Tag: ''},
      Comment: ''
    },
    Name: 'fpStep' + i
  });
  polyLines.push({
    constructor: {name: 'HmiPolyline'},
    Left: 0,
    Top: 0,
    Points: [0, 0]
  });
}
/** @type {HMIScreenInterface} screen contains 20 faceplates and 20 polylines */
const screen = { Items: [...faceplateContainers, ...polyLines] };

// Test 1
drawSynoptic({
  Name: 'Bb02_Enables#Automatic Vorbedingungen okay2',
  Steps: [
    {
      Id: 21,
      HmiTag: 'R1.EmStopIntOk',
      GlobalDb: 'Bb02',
      Top: 20,
      Left: 20,
      Comment: {}
    },
    {
      Id: 22,
      HmiTag: 'R1.PSRangeOk',
      GlobalDb: 'Bb02',
      Top: 70,
      Left: 20,
      Comment: {}
    },
    {
      Id: 23,
      HmiTag: 'R1.Man',
      GlobalDb: 'Bb02',
      Top: 120,
      Left: 20,
      Comment: {}
    },
    {
      Id: 24,
      HmiTag: 'R1.Auto',
      GlobalDb: 'Bb02',
      Top: 120,
      Left: 350,
      Comment: {}
    },
    {
      Id: 25,
      HmiTag: 'R1.RestartIndication',
      GlobalDb: 'Bb02',
      Top: 170,
      Left: 20,
      Comment: {}
    },
    {
      Id: 26,
      HmiTag: 'R1.AutoPrecond',
      GlobalDb: 'Bb02',
      Top: 220,
      Left: 20,
      Comment: {}
    }
  ],
  Connectors: [
    {
      SourceId: 21,
      DestinationId: 22
    },
    {
      SourceId: 23,
      DestinationId: 26
    },
    {
      SourceId: 24,
      DestinationId: 25
    },
    {
      SourceId: 25,
      DestinationId: 26
    },
    {
      SourceId: 22,
      DestinationId: 23
    },
    {
      SourceId: 22,
      DestinationId: 24
    }
  ]
}, screen, {Language: 1031});
// verify Test 1
console.log('Faceplate containers:');
const expectedFaceplateValues = [
  {Left: 20, Top: 20},
  {Left: 20, Top: 70},
  {Left: 20, Top: 120},
  {Left: 350, Top: 120},
  {Left: 350, Top: 170},
  {Left: 20, Top: 220}
];
assertEqual(faceplateContainers[0].Left, faceplateContainers[0].Left, 20);
for (let i = 0; i < expectedFaceplateValues.length; i++) {
  assertEqual(`faceplateContainer[${i}].Left`, faceplateContainers[i].Left, expectedFaceplateValues[i].Left);
  assertEqual(`faceplateContainer[${i}].Top`, faceplateContainers[i].Top, expectedFaceplateValues[i].Top);
}

console.log('Polylines: TBD');
for (let i = 0; i < polyLines.length; i++) {
  const polyLine = polyLines[i];
  // console.log(i + ' Left: ' + polyLine.Left + ' Top: ' + polyLine.Top);
}

// Test2

console.log('finish');
