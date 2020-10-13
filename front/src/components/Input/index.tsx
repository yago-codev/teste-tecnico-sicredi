import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Tooltip } from 'components';

import { InputContainer, InputError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  iconSize: number;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  iconSize,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <InputContainer
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={isFilled}
    >
      {Icon && <Icon size={iconSize} color="#757575" />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <InputError isErrored={!!error}>
          <Tooltip title={error} />
          <FiAlertCircle size={20} />
        </InputError>
      )}
    </InputContainer>
  );
};
