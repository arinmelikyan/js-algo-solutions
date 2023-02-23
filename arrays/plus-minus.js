const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    const arrLength = arr.length;
    const positives = arr.filter(i => i > 0).length / arrLength;
    const negatives = arr.filter(i => i < 0).length / arrLength;
    const zeros = arr.filter(i => i === 0).length / arrLength;

    const ratioList = `${parseFloat(positives.toFixed(6))} \n${parseFloat(negatives.toFixed(6))} \n${parseFloat(zeros.toFixed(6))}`;

    console.log(ratioList);
}

plusMinus(arr);