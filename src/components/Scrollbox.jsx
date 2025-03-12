import { useEffect, useRef } from "react";
import styled from "styled-components";

export const ScrollableContainer = styled.div`
    position: absolute;
    left: 0;
    max-width: 100%;
    overflow-x: auto;
    
    padding: 0px 1rem 0px 1rem;
    box-sizing: border-box;

    /* Hide scrollbar for WebKit browsers */
    .deck{
        user-select: none;

        &::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
        }

        overflow: auto;
        white-space: nowrap;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        div{
            border: 1px solid rgba(255, 255, 255, .1);
            flex-shrink: 0;
            background: radial-gradient(150% 150% at 0% 100%, #261c45 0%, rgba(35, 25, 74, 0) 100%);
        }
        div:hover{
            cursor: pointer;
        }
    }
`;

export const CardDeckScrollable = ({children}) => {
    const containerRef = useRef(null);
    const deckRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(()=>{
        const deck = deckRef.current;

        const handleMouseDown = (e) => {
            isDragging.current = true;
            startX.current = e.pageX - deck.offsetLeft;
            scrollLeft.current = deck.scrollLeft;
            deck.style.cursor = 'grabbing'; // change the cursor while dragging
        };

        const handleMouseLeave = (e) => {
            isDragging.current = false;
            deck.style.cursor = 'grab'; // reset cursor
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            deck.style.cursor = 'grab'; // reset cursor
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - deck.offsetLeft;
            const walk = (x - startX.current) * 0.8; // Adjust scroll speed
            deck.scrollLeft = scrollLeft.current - walk;
            console.log(deck.scrollLeft);
        }

        deck.addEventListener('mousedown', handleMouseDown);
        deck.addEventListener('mouseleave', handleMouseLeave);
        deck.addEventListener('mouseup', handleMouseUp);
        deck.addEventListener('mousemove', handleMouseMove);

        return ()=>{
            if (deck){
                deck.removeEventListener('mousedown', handleMouseDown);
                deck.removeEventListener('mouseleave', handleMouseLeave);
                deck.removeEventListener('mouseup', handleMouseUp);
                deck.removeEventListener('mousemove', handleMouseMove);
            };
        }
    });

    return(
    <ScrollableContainer id='container' ref={containerRef}>
        <div className="deck" ref={deckRef}>
            {children}
        </div>
    </ScrollableContainer> 
    )
}