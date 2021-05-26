//Перепиши функцию makeTransaction() так, 
//чтобы она не использовала callback - функции onSuccess и onError,
//а принимала всего один параметр transaction и возвращала промис.


//Как функция работает сейчас 

 const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
/*
const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
            onSuccess(transaction.id, delay);
        } else {
            onError(transaction.id);
        }
    }, delay);
};
 */
// Как должна работать
const makeTransaction2 = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
       let id = transaction.id;
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            
            if (canProcess) {
                resolve({id, delay});
            } else {
                reject(transaction.id);
            }
        }, delay);
    });
};

/* const logSuccess = (id, time) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
}; */

const logSuccess2 = ({id, delay}) => {
    console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};


// Работает так

/* makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError); */

//Должно работать так

makeTransaction2({ id: 70, amount: 150 })
    .then(logSuccess2)
    .catch(logError);

makeTransaction2({ id: 71, amount: 230 })
    .then(logSuccess2)
    .catch(logError);

makeTransaction2({ id: 72, amount: 75 })
    .then(logSuccess2)
    .catch(logError);

makeTransaction2({ id: 73, amount: 100 })
    .then(logSuccess2)
    .catch(logError);