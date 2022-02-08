import { styled } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';
import { IoCaretDownSharp } from "react-icons/io5";
import {Text} from '@components/common';

const AccordionChevron = styled(IoCaretDownSharp, {
width: "18px",
  transition: 'transform 300ms',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});
const AccordionContainer = styled(Accordion.Item , {
    backgroundColor: 'white',
    width: '124px'
});
const AccordionTrigger = styled(Accordion.Trigger , {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: '-10px',
    border: 'none',
    width: '140px',
    cursor: 'pointer',
});
const AccordionItem= styled(Accordion.Trigger , {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    border: 'none',
    marginBottom: '0px',
    cursor: 'pointer',
    padding: '12px 0px 12px 0px',
    borderTop: '1px solid #D9D9D9',
    width: '140px',
    textAlign: 'left',
    '&:hover': {
        backgroundColor: '#F3F3F3',
    }
});



interface AccordianProps {
    title: string;
    items: string[];
    setIndustry: (active: string) => void;
}


export const Accordian = ({title, items, setIndustry} : AccordianProps) => {
    const handleDropdownValueClicked = (value:string) => {
        setIndustry(value);
    }
    return(
        <Accordion.Root type="single" collapsible >
            <AccordionContainer value="item-1" >
            <Accordion.Header>
                <AccordionTrigger>
                <Text size='3'>{title}</Text>
                <AccordionChevron aria-hidden size={30} />
                </AccordionTrigger>
            </Accordion.Header>
            <Accordion.Content style={{position: 'absolute'}}>
                    {items.map((value, key) => {
                            return(
                                <AccordionItem key={key} onClick={() => {handleDropdownValueClicked(value)}}>
                                    <Text size='3'>{value}</Text>
                                </AccordionItem>
                            )
                    })}
            </Accordion.Content>
            </AccordionContainer>
        </Accordion.Root>
    )
};