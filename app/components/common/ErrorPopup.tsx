import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, Button, Flex, Heading, Text } from '@components/common';
import { styled } from '@stitches/react';
import { IoCloseSharp } from "react-icons/io5";
import * as DialogPrimitive from '@radix-ui/react-dialog';

const ErrorPopupContainer = styled('div', {
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    width: '100vw',
    height: '100vh',
    position: "absolute",
    right: '0',
    top: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

type ErrorPopupData = React.ComponentProps<typeof DialogPrimitive.Root> & {
    title: string;
    description: string;
};


export const ErrorPopup = ({ title, description, ...props }: ErrorPopupData) => {
    return (
        <Dialog {...props}>
            <DialogContent>
                <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                    {title}
                </Text>
                <Text size="2" as="p" css={{ lineHeight: '25px' }}>
                    {description}
                </Text>
            </DialogContent>
        </Dialog>
        // <ErrorPopupContainer>
        //     <div style={{position: "absolute", backgroundColor: 'white', padding: '40px 20px', borderRadius: '10px'}}>
        //         <IoCloseSharp size={26} onClick={() => {setPageError(null)}} style={{cursor: 'pointer', float: 'right', marginTop: '-24px'}}/>
        //         <Text size={4} style={{marginTop: '-18px', marginBottom: '20px', fontWeight: '600'}}>{title}</Text>
        //         <Text style={{width: '80%', marginLeft:'20px'}}>{error}</Text>
        //     </div>
        // </ErrorPopupContainer>
    )
}