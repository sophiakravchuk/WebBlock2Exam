var tunedFrequency = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];

function check_lower(element, index){
    // if (Math.round(element)  > Math.round(tunedFrequency[index]))
    if (element === tunedFrequency[index]){
        return "OK";
    }else if (element + (element*3/100) > tunedFrequency[index]){
        return ">•";
    }
    return ">>•";
}

function check_higher(element, index){
    if (element === tunedFrequency[index]){
        return "OK";
    }else if (element - (element*3/100) < tunedFrequency[index]){
        return "•<";
    }
    return "•<<";
}

function tune(arr) {
    var resultArr = [];
    if (arr.length < 6) {
        return 0;
    }
    for (let freq_ind in arr) {
        if (arr[freq_ind] === 0) {
            resultArr.push("-");
        }else if(arr[freq_ind] === tunedFrequency[freq_ind]){
            resultArr.push("OK");
        } else if (arr[freq_ind] < tunedFrequency[freq_ind]){
            resultArr.push(check_lower(arr[freq_ind], freq_ind));
        }else if (arr[freq_ind] > tunedFrequency[freq_ind]){
            resultArr.push(check_higher(arr[freq_ind], freq_ind));
        }
    }
    return resultArr;
}

a = tune([0, 246.94, 0, 0, 0, 78]);
b = tune([329.63, 246.94, 195, 146, 111, 82.41]);
c = tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41]);

console.log(a);
console.log(b);
console.log(c);
