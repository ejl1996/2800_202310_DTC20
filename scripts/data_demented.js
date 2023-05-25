// Imported alzheimer.csv data from Kaggle: https://www.kaggle.com/datasets/brsdincer/alzheimer-features
const data = `Group,M/F,Age,EDUC,SES,MMSE,CDR,eTIV,nWBV,ASF
Nondemented,M,87,14,2,27,0,1987,0.696,0.883
Nondemented,M,88,14,2,30,0,2004,0.681,0.876
Demented,M,75,12,,23,0.5,1678,0.736,1.046
Demented,M,76,12,,28,0.5,1738,0.713,1.01
Demented,M,80,12,,22,0.5,1698,0.701,1.034
Nondemented,F,88,18,3,28,0,1215,0.71,1.444
Nondemented,F,90,18,3,27,0,1200,0.718,1.462
Nondemented,M,80,12,4,28,0,1689,0.712,1.039
Nondemented,M,83,12,4,29,0.5,1701,0.711,1.032
Nondemented,M,85,12,4,30,0,1699,0.705,1.033
Demented,M,71,16,,28,0.5,1357,0.748,1.293
Demented,M,73,16,,27,1,1365,0.727,1.286
Demented,M,75,16,,27,1,1372,0.71,1.279
Nondemented,F,93,14,2,30,0,1272,0.698,1.38
Nondemented,F,95,14,2,29,0,1257,0.703,1.396
Demented,M,68,12,2,27,0.5,1457,0.806,1.205
Demented,M,69,12,2,24,0.5,1480,0.791,1.186
Demented,F,66,12,3,30,0.5,1447,0.769,1.213
Demented,F,68,12,3,29,0.5,1482,0.752,1.184
Nondemented,F,78,16,2,29,0,1333,0.748,1.316
Nondemented,F,80,16,2,29,0,1323,0.738,1.326
Nondemented,F,83,16,2,29,0,1323,0.718,1.327
Nondemented,F,81,12,4,30,0,1230,0.715,1.427
Nondemented,F,82,12,4,30,0,1212,0.72,1.448
Nondemented,F,85,12,4,29,0,1225,0.71,1.433
Demented,M,76,16,3,21,0.5,1602,0.697,1.096
Demented,M,77,16,3,16,1,1590,0.693,1.108
Demented,M,79,16,3,22,1,1600,0.68,1.1`;

// Calculation of averageMMSE score of demented users completed with help from ChatGPT
const rows = data.split('\n');
const headers = rows[0].split(',');

const groupIndex = headers.indexOf('Group');
const mmseIndex = headers.indexOf('MMSE');
const dementedMMSEScores = [];
let sumMMSE = 0;
let countDemented = 0;

for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const group = row[groupIndex];
    const mmseScore = parseFloat(row[mmseIndex]);

    if (group === 'Demented' && !isNaN(mmseScore)) {
        dementedMMSEScores.push(mmseScore);
        sumMMSE += mmseScore;
        countDemented++;
    }
}

const averageMMSE = sumMMSE / countDemented;

console.log('Demented MMSE Scores:', dementedMMSEScores);
//[23, 28, 22, 28, 27, 27, 27, 24, 30, 29, 30, 29, 29, 29, 30, 27, 27, 27, 21, 16, 22]
console.log('Average MMSE for Demented:', averageMMSE);
//26.61904761904762 out of 30
//equivalent value out of 20:  17.7
//set 17 for at risk of dementia 

//set 18 as may be demented
