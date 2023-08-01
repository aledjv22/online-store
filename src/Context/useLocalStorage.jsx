import React from 'react';

function useLocalStorage(userName, initialValue){
  // Users
  const [users, setUsers] = React.useState(initialValue);

  // Purchases made
  const [ordersHistory, setOrdersHistory] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageUsers = localStorage.getItem(userName);
        const localStorageOrdersHistory = localStorage.getItem('history');

        let analyzedUsers;
        let analyzedOrdersHistory;
  
        if (!localStorageUsers) {
          localStorage.setItem(userName, JSON.stringify(initialValue));
          analyzedUsers = initialValue;
        } else {
          analyzedUsers = JSON.parse(localStorageUsers);
          setUsers(analyzedUsers);
        }

        if (!localStorageOrdersHistory) {
          localStorage.setItem('history', JSON.stringify(initialValue));
          analyzedOrdersHistory = initialValue;
        } else {
          analyzedOrdersHistory = JSON.parse(localStorageOrdersHistory);
          setOrdersHistory(analyzedOrdersHistory);
        }
      } catch (error) {
        console.log('Error: ',error);
      }
    }, 3000);
  }, []);

  const saveUser = (newUser) => {
    const stringifiedUsers = JSON.stringify(newUser); 
    localStorage.setItem(userName, stringifiedUsers);
    setUsers(newUser);
  };

  const saveOrder = (newOrder) => {
    const stringifiedOrders = JSON.stringify(newOrder); 
    localStorage.setItem('history', stringifiedOrders);
    setOrdersHistory(newOrder);
  };

  return {
    users,
    saveUser,
    ordersHistory,
    saveOrder
  };
}

export { useLocalStorage };