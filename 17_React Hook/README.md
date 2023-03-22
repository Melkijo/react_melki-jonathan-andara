# (17) Hook #
React hook adlaah fitur yang dikenalkan oleh React versi 16.8, digunakan untuk memungkinkan pengembang menggunakan state dan fitur react lainnya dalam komponene functional, yang sebelumnya hanya daapat dilakukan pada class component. contoh react hook :
- useState
- useEffect
- useRef
- useContect
### Aturan pemanggilan ###
1. hanya panggil hook pada tingkat atas jangan pada loops, conditions atau nested functions
2. Hanya panggil hook dari fungsi-fungsi react

## useState ##
dalah salah satu hook pada React yang digunakan untuk membuat dan memanipulasi state pada sebuah functional component. Dalam React, state digunakan untuk menyimpan data atau informasi yang dapat berubah-ubah selama komponen tersebut di-render. <br>
contoh implementasi: <br>
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## useEffect ##
adalah satu hook pada React yang digunakan untuk mengakses dan memanipulasi siklus hidup atau lifecycle dari sebuah komponen React. Dalam React, setiap komponen memiliki siklus hidup yang terdiri dari beberapa fase seperti mounting, updating, dan unmounting. bisa digunakan untuk melakukan suatu aksi jika react component sudah selesai melakukan render. <br>
Contoh implementsai: <br>
```javascript
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // code untuk pengambilan data dari server
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Custom Hook ##
memungkinkan pengguna untuk membuat sebuah fungsi yang dapat digunakan kembali (reusable) untuk mengatur logika tertentu pada komponen-komponen React. Dengan menggunakan custom hook, kita dapat memisahkan logika tertentu dari komponen dan mengorganisirnya secara lebih mudah dan reusable. <br>
contoh Implementasi: <br>
```javascript
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
}

function Counter() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```
