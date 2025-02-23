/// <reference types="react" />
import type { BubbleProps } from 'flowise-embed';
type Props = BubbleProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'flowise-fullchatbot-with-images': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const FullChatWithImages: (props: Props) => null;
export {};
//# sourceMappingURL=FullChatWithImages.d.ts.map