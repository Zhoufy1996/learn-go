/** @format */

import { useState, useEffect, useRef } from 'react';

const useClientRect = ({
    deps = [],
}: {
    deps: any[];
}): [DOMRect | null, React.RefObject<HTMLHeadingElement>] => {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, ...deps]);
    return [rect, ref];
};
export default useClientRect;
