import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '@stitches-config';

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;

const Provider = styled(TooltipPrimitive.Provider, {});

export function TooltipProvider({
    children,
    ...props
}: TooltipProps) {
    return (
        <Provider {...props}>
            {children}
        </Provider>
    );
}
