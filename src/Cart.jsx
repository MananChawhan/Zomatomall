import React from "react";
import Navbar from './Navbar';
import Card from "./Card";
const  Cart =()=>{
    return(
        <>
        <Navbar/>
        <div className='flex flex-wrap mt-16 justify-center items-center gap-5'>
            <Card imageurl="https://avatars.githubusercontent.com/u/121217947?v=4 "
            StudentName="Manan Chawhan"
            StudentAge="21"
            hostelName="Stanza Living"
            spendings="60000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/213727177?v=4"
            StudentName="Nakshatra Bapat"
            StudentAge="22"
            hostelName="Stanza Living"
            spendings="10000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/103848489?v=4"
            StudentName="Amit Yadav"
            StudentAge="24"
            hostelName="Azad Bhavan"
            spendings="40000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/111278270?v=4"
            StudentName="Harsh Singh"
            StudentAge="21"
            hostelName="Taigore Bhavan"
            spendings="50000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/119554829?v=4 "
            StudentName="Adesh Pandey"
            StudentAge="22"
            hostelName="Azad Bhavan"
            spendings="2000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/185872032?v=4"
            StudentName="Ankita Dhakad"
            StudentAge="21"
            hostelName="Taigore C"
            spendings="25000"
            />
             <Card imageurl="https://avatars.githubusercontent.com/u/214207346?v=4"
            StudentName="Nikesh Raj"
            StudentAge="22"
            hostelName="Milkha Bhavan"
            spendings="40000"
            />
             <Card imageurl="https://randomuser.me/api/portraits/men/11.jpg "
            StudentName="Ajay jayaswal"
            StudentAge="22"
            hostelName="Kalam Bhavan"
            spendings="10000"
            />
        </div>
        </>
    )
}

export default Cart