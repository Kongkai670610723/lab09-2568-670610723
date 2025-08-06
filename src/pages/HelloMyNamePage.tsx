// HelloMyNamePage.tsx

import { useState } from "react"; //import


export default function HelloMyNamePage() {
  // สร้าง state สำหรับเก็บชื่อที่พิมพ์

  const [name, setName] = useState("");

  const nameInputOnchange = (event: any) => {
    //console.log(event);
    //event ใน onChange เป็นอ็อบเจกต์ที่มีข้อมูลของ input เช่น
    //แบบเดิม = คุณพยายามเก็บอ็อบเจกต์ทั้งก้อนลงใน name (ซึ่งเป็น string) → จึงเกิด Type Error

    //แบบใหม่ = คุณเก็บแค่ค่าที่พิมพ์ใน input ลงใน name (ซึ่งเป็น string) → จึงไม่เกิด Type Error
    
    setName(event.target.value);

  };


  //สร้าง state สำหรับเก็บผลลัพธ์ที่จะแสดง
  const [Result, setResult] = useState("Please insert your name");

  //เปลี่ยนสีปุ่ม
  const [isGreetOk, setGreetOk] = useState(false);
  const greetBtnOnClike = () => {
    if (name == "") {
      setResult("Please insert your name");
      //ถ้าเป็นชื่อว่าง ให้แสดงข้อความแจ้งเตือน
      setGreetOk(false);
    } else {
      setResult(`Hello ${name}`);
      setGreetOk(true);
    }
  };




  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        //เรียกใช้ event 
        onChange={nameInputOnchange}

        //แสดงว่า name คือตัวแปรที่เราจะใช้ รับค่าจาก input
        value={name}

      />
      <button className="btn btn-primary" onClick={greetBtnOnClike}>Greet Me</button>
      {/* Result Text */}
      <p className={ isGreetOk ? "" : "text-danger"}>{Result}</p>
    </div>
  );
}
