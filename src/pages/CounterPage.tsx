// CounterPage.tsx
import { useState } from "react";



export default function CounterPage() {
  // อธิบาย useState คือฟังชัน หนึ่ง ที่มี ค่าเริ่มต้น ข้างใน () เป็น string หรือ number ค่าว่าง null
  // สร้าง state count เริ่มต้นที่ 0

  const [count, setCount] = useState(0);


  // 1.สร้างฟังก์ชัน เพื่อ event เรียกใช้
  // ฟังก์ชันเพิ่มค่า count ทีละ 1
  const addCounter = () => {
    setCount(count + 1);
    // ถัดไป มันจะ return const ตัวแปร ที่มีสมาชิก ค่าหนึ่งชื่อ [ count เพื่อไปแสดง, setCount  ] เก็บค่า state เริ่มต้น และค่าที่ถูกอัพเดต
    //count2++; แบบตัวแปรธรรมดา

  };

  //2. let count2 = 0;

  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter:{count}</p>
      <button onClick={addCounter}>Increase</button>
    </div>
  );
}
