import { styled } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';
import { IoCaretDownSharp } from "react-icons/io5";

const AccordionChevron = styled(IoCaretDownSharp, {
  transition: 'transform 300ms',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const AccordionItem = styled(Accordion.Item , {
   
  });

interface AccordianProps {
    title: string;
    items: string[];
}

export const Accordian = ({title, items} : AccordianProps) => (
    <Accordion.Root type="single" collapsible >
    <AccordionItem value="item-1">
    <Accordion.Header>
        <Accordion.Trigger>
        <span>{title}</span>
        <AccordionChevron aria-hidden size={30} />
        </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content >
            {items.map((value, key) => {
                    return(
                        <div key={key}>{value}</div>
                    )
            })}
    </Accordion.Content>
    </AccordionItem>
</Accordion.Root>
);