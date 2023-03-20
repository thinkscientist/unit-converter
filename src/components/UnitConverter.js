import React, { useState } from 'react';

const UnitConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');
    const [inputUnit, setInputUnit] = useState('kg');
    const [outputUnit, setOutputUnit] = useState('lbs');

    const conversions = {
        kg_lbs: (value) => value * 2.20462,
        lbs_kg: (value) => value * 0.453592,
        c_f: (value) => (value * 9 / 5) + 32,
        f_c: (value) => (value - 32) * 5 / 9,
    };

    const handleConversion = () => {
        const conversionKey = `${inputUnit}_${outputUnit}`;
        if (conversions[conversionKey]) {
            setConvertedValue(conversions[conversionKey](inputValue));
        } else {
            setConvertedValue('Invalid conversion');
        }
    };

    return (
        <div className="container">
            <input
                type="number"
                className="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <select
                className="form-select"
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="kg">Kilograms</option>
                <option value="lbs">Pounds</option>
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
            </select>
            
            <select
                className="form-select"
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="kg">Kilograms</option>
                <option value="lbs">Pounds</option>
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
            </select>
            <input
                type="text"
                className="form-control"
                value={convertedValue}
                readOnly
            />
            <button className="btn btn-primary" onClick={handleConversion}>Convert</button>

        </div>
    );
};

export default UnitConverter;
