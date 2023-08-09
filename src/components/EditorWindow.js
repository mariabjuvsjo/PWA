import React from 'react'

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function EditorWindow() {
    return (
        <table className='custom-event-editor' style={{ width: '100%' }}>
            <tbody>
                <tr>
                    <td className='e-textlabel'>Type of Work</td>
                    <td><DropDownListComponent id='EventType' dataSource={['Sparris', 'Hallon', 'Jordgubbar', 'Other']}
                        placeholder='Choose work' className='e-field' data-name='EventType'
                    >
                    </DropDownListComponent></td>
                </tr>
                <tr>
                    <td className='e-textlabel'>Start</td>
                    <td><DateTimePickerComponent id='StartTime' format='dd/MM/yy hh:mm a' className='e-field' data-name='StartTime'>
                    </DateTimePickerComponent></td>
                </tr>
                <tr>
                    <td className='e-textlabel'>End</td>
                    <td><DateTimePickerComponent id='EndTime' format='dd/MM/yy hh:mm a' className='e-field' data-name='EndTime'>
                    </DateTimePickerComponent></td>
                </tr>
                <tr>
                    <td className='e-textlabel'>Comment</td>
                    <td> <textarea id='Description' name='Description' className='e-field e-input' rows={3} cols={50}>

                    </textarea></td>
                </tr>



            </tbody>


        </table>

    )
}

export default EditorWindow