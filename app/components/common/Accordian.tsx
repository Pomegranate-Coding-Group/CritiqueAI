import { styled } from '@stitches-config';
import * as Accordion from '@radix-ui/react-accordion';
import { IoCaretDownSharp } from "react-icons/io5";
import {Text} from '@components/common';

const AccordionRoot = styled(Accordion.Root, {});
const AccordionHeader = styled(Accordion.Header, {});
const AccordionContent = styled(Accordion.Content, {});

const AccordionChevron = styled(IoCaretDownSharp, {
  width: "18px",
  transition: 'transform 300ms',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});
const AccordionContainer = styled(Accordion.Item , {
    backgroundColor: '$loContrast',
    width: '124px',
});
const AccordionTrigger = styled(Accordion.Trigger , {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$loContrast',
    border: 'none',
    width: '140px',
    cursor: 'pointer',
    fontFamily: "$mono",
});
const AccordionItem= styled(Accordion.Trigger , {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '$loContrast',
    border: 'none',
    marginBottom: '0px',
    cursor: 'pointer',
    padding: '12px 0px 12px 0px',
    borderTop: '1px solid #D9D9D9',
    width: '140px',
    textAlign: 'left',
    fontFamily: "$mono",

    '&:hover': {
        backgroundColor: '$gray3',
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
        <AccordionRoot type="single" collapsible >
            <AccordionContainer value="item-1" >
            <AccordionHeader>
                <AccordionTrigger>
                <Text size='3'>{title}</Text>
                <AccordionChevron aria-hidden size={30} />
                </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent style={{position: 'absolute'}}>
                    {items.map((value, key) => {
                            return(
                                <AccordionItem key={key} onClick={() => {handleDropdownValueClicked(value)}}>
                                    <Text size='3'>{value}</Text>
                                </AccordionItem>
                            )
                    })}
            </AccordionContent>
            </AccordionContainer>
        </AccordionRoot>
    )
};