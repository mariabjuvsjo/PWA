import React, { useState } from 'react'
import { DateTimePicker } from 'react-datetime-picker';
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


function Raport() {

    const navigate = useNavigate()
    const options = [
        { value: 'jordgubbar', text: 'Jordgubbar' },
        { value: 'hallon', text: 'Hallon' },
        { value: 'sparris', text: 'Sparris' },
        { value: 'ovrigt', text: 'Övrigt' },

    ]
    const [startDate, setStartDate] = useState(new Date())
    const [stopDate, setStopDate] = useState(new Date())
    const [selected, setSelected] = useState(options[0].value);
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState()
    console.log(startDate)
    function zeroPad(number) {

        if (number < 10) {
            return "0" + number;

        }

        return "" + number;

    }



    const handleStart = (e) => {
        e.preventDefault()
        setDate(zeroPad(startDate.getDate()) + '-' + (zeroPad(startDate.getMonth() + 1)) + '-' + startDate.getFullYear());

        setStartTime(startDate.getHours() + ':' + startDate.getMinutes());


    }


        ;

    const handleStop = (e) => {
        e.preventDefault()
        setEndTime(stopDate.getHours() + ':' + stopDate.getMinutes());


    }

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);


    };

    const handleSend = (e) => {
        e.preventDefault()
        try {


            navigate('/thanks')



        } catch (err) {
            alert("error:" + err)
        }


    };

    const handleClick = async (e) => {
        e.preventDefault()


        navigate('/')

    }



    return (

        <div className='raport'>
            <button className='btn-back' onClick={handleClick}>X</button>
            <h2>Welcome User</h2>
            <div className='work-div'>
                <p>Select Work: </p>
                <select style={{ padding: 10, borderRadius: 5, marginBottom: 10 }} value={selected} onChange={handleChange}>
                    {options.map(option => (
                        <option style={{ background: 'white' }} key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>

            <div className='work-div' >
                <DateTimePicker
                    label="Controlled picker"
                    placeholder="YYYY / MM / DD"
                    value={startDate}
                    onChange={(newStartDate) => setStartDate(newStartDate)}
                    locale='sv-SV'
                    renderNumbers={true}
                />
                <button className='btn-work' onClick={handleStart}>Start Work</button>

            </div>


            <div className='work-div stop'>   <DateTimePicker
                label="Controlled picker"
                value={stopDate}
                onChange={(newValue) => setStopDate(newValue)}
                locale='sv-SV'
            />
                <button className='btn-stop' onClick={handleStop}>Stop Work</button>
            </div>


            <div className='work-card'>

                <h2>Todays work:</h2>
                <p>Date: {date}</p>
                <p>Started working: {startTime}  </p>
                <p>Stopped working: {endTime} </p>
                <p>Type of work: {selected} </p>

                <button className="btn-work" onClick={handleSend}>Send In</button>
            </div>
        </div>
    )
}

export default Raport