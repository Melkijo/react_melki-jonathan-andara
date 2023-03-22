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
contoh implementasi:
``javascript
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
``
