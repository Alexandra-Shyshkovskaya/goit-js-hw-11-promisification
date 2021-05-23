//Перепиши функцию toggleUserState() так, 
//чтобы она не использовала callback - функцию callback, 
//а принимала всего два параметра allUsers и userName и возвращала промис.

// Изначальный вид функции
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

// Сейчас работает так

toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);


//Как должно работать

const toggleUserState2 = (allUsers, userName) => {
    
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers);
    });
  
};

const logger2 = updatedUsers => console.table(updatedUsers);

//Должно работать так
 
toggleUserState2(users, 'Mango').then(logger);
toggleUserState2(users, 'Lux').then(logger);