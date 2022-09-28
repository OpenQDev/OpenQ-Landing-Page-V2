import { useEffect, useRef, useState } from "react";
import { tw } from "twind";

const OnScroll = ({ children, className, fade }) => {
	const [isIntersecting, setIsIntersecting] = useState();
	const paragraph = useRef();
	useEffect(() => {
		let localIsIntersecting;
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!isIntersecting && !localIsIntersecting) {
			//	localIsIntersecting = true;
				setIsIntersecting(entry.isIntersecting, { rootMargin: "100px" });
			}
		});
		observer.observe(paragraph.current);
	}, []);

	return (<div className={tw(`${className} ${isIntersecting && fade}`)} ref={paragraph}>
		{children}
	</div>);
};
export default OnScroll;