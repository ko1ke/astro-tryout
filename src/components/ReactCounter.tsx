import { useState } from "react";

export function ReactCounter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>React Counter</h1>
			<p>{count}</p>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
}
