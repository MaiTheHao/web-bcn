import React, { memo, useEffect, useRef, useState } from 'react';
import DropDownIcon from '/svg/DropDown.svg';
import './Select.css';
function Select({
    options,
    placeholder = 'Select',
    onSelect,
    selectedValue = null,
    customClassName,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selectedValue);
    const selectRef = useRef(null);

    // Không mutate props.options, chỉ thêm 'Mặc định' nếu chưa có, và không lặp lại
    const displayOptions = React.useMemo(() => {
        const filtered = options.filter((opt, idx, arr) =>
            opt.value !== null || arr.findIndex(o => o.value === null) === idx
        );
        const hasDefault = filtered.some(opt => opt.value === null);
        return hasDefault ? filtered : [{ value: null, label: 'Mặc định' }, ...filtered];
    }, [options]);

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
        onSelect?.(value);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        setSelectedOption(selectedValue);
    }, [selectedValue]);

    const selectedLabel =
        selectedOption !== null
            ? displayOptions.find((opt) => opt.value === selectedOption)?.label
            : placeholder;

    return (
        <div
            ref={selectRef}
            className={`select ${customClassName?.select || ''}`}
            aria-label={`Select ${placeholder}`}
        >
            <button
                type='button'
                className={`select__trigger ${
                    !selectedOption ? 'select__trigger--empty' : ''
                } ${customClassName?.trigger || ''}`}
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                {selectedLabel}
                <img
                    src={DropDownIcon}
                    alt='dropdown icon'
                    className={`select__icon ${
                        isOpen ? 'select__icon--rotated' : ''
                    }`}
                />
            </button>

            <ul
                className={`select__dropdown ${
                    isOpen ? 'select__dropdown--open' : ''
                } ${customClassName?.dropdown || ''}`}
            >
                {displayOptions.map(
                    (option) =>
                        option.value !== selectedOption && (
                            <li
                                key={option.value ?? 'null'}
                                className={`select__item ${customClassName?.item || ''}`}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </li>
                        )
                )}
            </ul>
        </div>
    );
}

export default memo(Select);
