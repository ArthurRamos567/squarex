import { useState, useEffect } from 'react';

export default function useIsInView(elementRef) {
    const [inView, setInView] = useState(false);
   
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []); 
    return inView
}
