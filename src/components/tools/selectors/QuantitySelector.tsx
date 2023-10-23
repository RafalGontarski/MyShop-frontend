import React, {useEffect, useRef, useState} from "react";
import {QuantitySelectorButton} from "../button/buttons.styles";
import UpDownIcon from '../../../resources/icons/UpDownIcon.png';

interface CustomButtonProps {
    label: React.ReactNode;
    onClick?: () => void;
    onSelectNumber?: (number: number) => void;
}

type QuantitySelectorProps = CustomButtonProps & { as?: React.ElementType; to?: string };

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ label, onClick, onSelectNumber, ...props }) => {
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [isCustomInput, setIsCustomInput] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputWidth, setInputWidth] = useState('2ch');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newWidth = `${Math.max(value.length, 1) + 1}ch`;
        setInputWidth(newWidth);  // Ustawia szerokość inputu na podstawie liczby znaków + 1
    };



    const handleSelection = (number: number) => {
        setSelectedNumber(number);
        setIsCustomInput(number >= 10);
        if (onSelectNumber) onSelectNumber(number);
        setIsSelectorOpen(false);
    };

    const handleCustomInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const value = parseInt(event.currentTarget.value, 10);
            if (!isNaN(value) && value >= 10) {
                handleSelection(value);
            }
        }
    };

    useEffect(() => {
        if (isCustomInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCustomInput]);

    return (
        <div style={{ position: 'relative' }}>
            <style type="text/css">
                {`
                    input[type="number"]::-webkit-inner-spin-button,
                    input[type="number"]::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    input[type="number"] {
                        -moz-appearance: textfield;
                    }
                `}
            </style>
            <QuantitySelectorButton
                style={{ textAlign: 'center' }}
                onClick={() => !isCustomInput && setIsSelectorOpen(!isSelectorOpen)}
                {...props}
            >
                {isCustomInput ? (
                    <input
                        ref={inputRef}
                        type="number"
                        min="10"
                        onChange={handleInputChange}
                        onKeyDown={handleCustomInput}
                        onBlur={() => setIsSelectorOpen(false)}
                        style={{
                            textAlign: 'center',
                            fontSize: 'larger',
                            border: 'none',
                            outline: 'none',
                            width: inputWidth,
                            backgroundColor: 'transparent',
                            margin: 0,
                        }}
                    />
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center' }}>
                        {selectedNumber}
                        {selectedNumber < 10 && <img src={UpDownIcon} alt="UpDown Icon" style={{ marginLeft: '8px' }} />}
                    </div>
                )}
            </QuantitySelectorButton>
            {isSelectorOpen && !isCustomInput && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    border: '1px solid #ccc',
                    backgroundColor: '#fff',
                    zIndex: 1,
                    width: '10%',
                    borderRadius: '0 0 0.5rem 0.5rem'
                }}>
                    {[...Array(9)].map((_, i) =>
                        <button key={i} onClick={() => handleSelection(i + 1)} style={{ display: 'block', width: '100%' }}>{i + 1}</button>
                    )}
                    <button onClick={() => setIsCustomInput(true)} style={{ display: 'block', width: '100%' }}>9+</button>
                </div>
            )}
        </div>
    );
};