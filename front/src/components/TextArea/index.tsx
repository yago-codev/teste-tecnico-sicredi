import React, {
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Tooltip } from 'components';

import { TextAreaContainer, TextAreaError } from './styles';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  iconSize: number;
  icon?: React.ComponentType<IconBaseProps>;
  placeholder: any;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  icon: Icon,
  iconSize,
  ...rest
}) => {
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: TextAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!TextAreaRef.current?.value);
  }, []);

  return (
    <TextAreaContainer
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={isFilled}
    >
      {Icon && <Icon size={iconSize} color="#757575" />}
      <textarea
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        name={name}
        defaultValue={defaultValue}
        ref={TextAreaRef}
        {...rest}
      />
      {error && (
        <TextAreaError isErrored={!!error}>
          <Tooltip title={error} />
          <FiAlertCircle size={20} />
        </TextAreaError>
      )}
    </TextAreaContainer>
  );
};
