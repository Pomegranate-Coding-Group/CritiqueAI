import React from 'react';
import { styled } from '@stitches-config';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { IoCheckmark, IoChevronUp, IoChevronDown } from 'react-icons/io5';
import * as SelectPrimitive from '@radix-ui/react-select';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: '$loContrast',
    color: violet.violet11,
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { backgroundColor: mauve.mauve3 },
    '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledContent = styled(SelectPrimitive.Content, {
    overflow: 'hidden',
    backgroundColor: '$loContrast',
    borderRadius: 6,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
    padding: 5,
});

const StyledItem = styled(SelectPrimitive.Item, {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&:focus': {
        backgroundColor: violet.violet9,
        color: violet.violet1,
    },
});

const StyledLabel = styled(SelectPrimitive.Label, {
    padding: '0 25px',
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const scrollButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: '$loContrast',
    color: violet.violet11,
    cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const Select = styled(SelectPrimitive.Root);
export const SelectTrigger = styled(StyledTrigger);
export const SelectValue =  styled(SelectPrimitive.Value);
export const SelectIcon = styled(SelectPrimitive.Icon);
export const SelectContent = styled(StyledContent);
export const SelectViewport =styled( StyledViewport);
export const SelectGroup = styled(SelectPrimitive.Group);
export const SelectItem = styled(StyledItem);
export const SelectItemText = styled(SelectPrimitive.ItemText);
export const SelectItemIndicator = styled(StyledItemIndicator);
export const SelectLabel = styled(StyledLabel);
export const SelectSeparator =styled( StyledSeparator);
export const SelectScrollUpButton =styled( StyledScrollUpButton);
export const SelectScrollDownButton = styled(StyledScrollDownButton);

type SelectItemProps = React.ComponentProps<typeof SelectItem> & {
    value: string;
    name: string;
};
export const DefaultSelectItem = ({ value, name, ...props }: SelectItemProps) => {
    return (<SelectItem value={value} {...props}>
        <SelectItemText>{name}</SelectItemText>
        <SelectItemIndicator>
            <IoCheckmark />
        </SelectItemIndicator>
    </SelectItem>);
}
type SelectProps = React.ComponentProps<typeof Select> & {
    children: React.ReactNode
};
export const SelectInput = ({ children, ...props }: SelectProps) => {
    return (
        <Select {...props}>
            <SelectTrigger aria-label="Food">
                <SelectValue />
                <SelectIcon>
                    <IoChevronDown />
                </SelectIcon>
            </SelectTrigger>
            <SelectContent>
                <SelectScrollUpButton>
                    <IoChevronUp />
                </SelectScrollUpButton>
                <SelectViewport>
                    {children}
                </SelectViewport>
                <SelectScrollDownButton>
                    <IoChevronDown />
                </SelectScrollDownButton>
            </SelectContent>
        </Select>);
}

export default SelectInput;