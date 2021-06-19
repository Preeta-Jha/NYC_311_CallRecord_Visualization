const createAndReturnDataset = (dataMap) => {
    let outputArray = [];
    dataMap.forEach((value, key) => {
        let area = {
            name: key,
            count: value 
        };

        outputArray.push(area);
    });

    return outputArray;
}; 

const computeAndGetDataset = (dataset, property, areaName=null) => {
    dataMap = new Map();
    const getRandomNumber = (maxNum) => {
        return Math.floor(Math.random() * Math.floor(maxNum));
    };

    dataset.forEach(element => {
        if(element.properties.hasOwnProperty(property)) {
            let propertyValue = element.properties[property];
            let areaNameCheck = areaName != null ? element.properties["City"] === areaName : true;
            if((propertyValue != null) && (propertyValue.toString().length > 0) && areaNameCheck) {
                let value = propertyValue.toString();
                if(dataMap.has(value)) {
                    dataMap.set(value, dataMap.get(value) + 1);
                }
                else {
                    dataMap.set(value, 1);
                }
            }
        }
    });

    return createAndReturnDataset(dataMap);
};
