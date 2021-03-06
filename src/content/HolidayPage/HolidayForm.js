import React from 'react';
import {
    Form,
    Select,
    SelectItem,
    TextArea,
    FileUploaderDropContainer,
    FileUploaderItem,
    DatePicker,
    DatePickerInput,
    Button
} from 'carbon-components-react';

const HolidayForm = () => {
    return (
        <Form className="bx--grid">
            <div className="bx--row">
                <div className="bx--col-lg-10">
                    <Select
                        id="select-type"
                        labelText="Select"
                        style={{ marginBottom: '1rem' }}
                    >
                        <SelectItem
                            text="Choose"
                            value="placeholder-item"
                        />
                    </Select>
                    <TextArea
                        labelText="Reason"
                        className="TEST_CLASS"
                        style={{ marginBottom: '1rem' }}
                    />
                </div>
                <div className="bx--col-lg-6">
                    <DatePicker
                        datePickerType="range"
                        style={{ marginBottom: '2rem' }}
                    >
                        <DatePickerInput
                            id="date-picker-input-id-start"
                            placeholder="mm/dd/yyyy"
                            labelText="Start date"
                        />
                        <DatePickerInput
                            id="date-picker-input-id-finish"
                            placeholder="mm/dd/yyyy"
                            labelText="End date"
                        />
                    </DatePicker>
                </div>
            </div>
            <div className='bx--row bx--col-lg-16'>
                <div className="bx--file__container">
                    <strong className='bx--file--label'>Document</strong>
                    <p className='bx--label-description'>
                        Only .pdf file.
                    </p>
                    <FileUploaderDropContainer
                        accept={['pdf']}
                        labelText="Drag and drop files here or click to upload"
                        tabIndex={0}
                    />
                    <FileUploaderItem status='edit' name='medical.pdf' style={{ marginBottom: '1rem' }} />
                </div>
            </div>
            <div className='bx--row bx--col-lg-16'>
                <div style={{ float: 'right' }}>
                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        kind="danger"
                        tabIndex={1}
                        type="submit"
                    >
                        Clear
                    </Button>
                </div>
            </div>
        </Form >
    );
};

export default HolidayForm;