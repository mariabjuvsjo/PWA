
// Registering Syncfusion license key
import { registerLicense } from '@syncfusion/ej2-base';

import React from 'react';
import '../App.css'
import EditorWindow from './EditorWindow';

import {
    ScheduleComponent, ViewDirective, ViewsDirective,
    Day, Week, WorkWeek, Month, Agenda, MonthAgenda, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { L10n } from '@syncfusion/ej2-base';


L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Add',
            'cancelButton': 'Close',
            'deleteButton': 'Remove',
            'newEvent': 'Add Work',
        },
    }
});


registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx0RXxbf1xzZFZMZVRbR3BPMyBoS35RdUVkW35ec3FdRWdeUkNx');


const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        console.log("sucess")
        alert("Your hours was sucessfully sent in! Thank you for this workday")
    } catch (err) {
        alert("Cannot connect to database or server")
    }
}
function Work() {
    return (

        <div className='work-container'>
            <h2>God Morning User!</h2>

            <p>Add your worktime</p>
            <div className='calender'>

                <ScheduleComponent
                    height='600px'
                    style={{ borderRadius: '10px' }}
                    currentView='Week'
                    firstDayOfWeek={1}

                    timeScale={{
                        enable: true,
                        interval: 60,
                        slotCount: 4
                    }}
                    eventSettings={

                        {
                            spannedEventPlacement: 'TimeSlot',
                            fields: {
                                subject: { title: 'Work', name: 'Subject', default: 'Type of work' },
                                description: { title: 'Comment', name: 'Description' },
                                startTime: { title: 'From', name: 'StartTime' },
                                endTime: { title: 'To', name: 'EndTime' },

                            }
                        }
                    }
                >
                    <ViewsDirective>
                        <ViewDirective option='Day' startHour='05:00' endHour='22:00'></ViewDirective>
                        <ViewDirective option='Week' startHour='05:00' endHour='22:00' />
                        <ViewDirective option='Month' />
                    </ViewsDirective>
                    <Inject
                        services={[Month, Week, Resize, Day, DragAndDrop,]}
                    />
                </ScheduleComponent>




            </div >
            <button onClick={handleSubmit} className="button is-button">Send to Tomas</button>
        </div>

    )
}

export default Work