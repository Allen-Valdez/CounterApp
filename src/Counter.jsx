import { useState } from 'react';
import './Counter.css';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	const [max, setMax] = useState(10);
	const [min, setMin] = useState(-10);

	const incrementCount = () => {
		setCount(prevCount => Math.min(prevCount + step, max));
	};

	const decreaseCount = () => {
		setCount(prevCount => Math.max(prevCount - step, min));
	};

	const resetCount = () => {
		setCount(0);
	};

	const onChangeStep = e => {
		const stepVal = Number(e.target.value);
		setStep(Math.max(stepVal, 1));
	};

	const onChangeMax = e => {
		const maxVal = Math.max(Number(e.target.value), 1);
		setMax(maxVal);
		setCount(prevCount => Math.min(prevCount, maxVal));
	};

	const onChangeMin = e => {
		const minVal = Math.min(Number(e.target.value), -1);
		setMin(minVal);
		setCount(prevCount => Math.max(prevCount, minVal));
	};

	const reachedMax = count >= max;
	const reachedMin = count <= min;

	return (
		<div className='counter-page'>
			<div className='counter-card'>
				<h1>Counter App</h1>

				<h2 className='count-display'>Count: {count}</h2>

				<div className='message-area'>
					{(reachedMax || reachedMin) && (
						<p className='limit-message'>
							{reachedMax && `Maximum reached: ${max}`}
							{reachedMin && `Minimum reached: ${min}`}
						</p>
					)}
				</div>

				<div className='button-group'>
					<button className='counter-button' onClick={decreaseCount} disabled={reachedMin}>
						[ − ]
					</button>

					<button className='reset-button' onClick={resetCount}>
						Reset
					</button>

					<button className='counter-button' onClick={incrementCount} disabled={reachedMax}>
						[ + ]
					</button>
				</div>

				<div className='input-group'>
					<div className='input-control'>
						<label htmlFor='step'>Step</label>
						<input id='step' type='number' value={step} onChange={onChangeStep} min='1' />
					</div>

					<div className='input-control'>
						<label htmlFor='max'>Max</label>
						<input id='max' type='number' value={max} onChange={onChangeMax} min='1' />
					</div>

					<div className='input-control'>
						<label htmlFor='min'>Min</label>
						<input id='min' type='number' value={min} onChange={onChangeMin} max='-1' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;

// Increase the counter \/
// Decrease the counter \/
// Reset the counter back to 0 \/
// Set a custom step amount \/
// Set a minimum limit \/
// Set a maximum limit \/
// Prevent the counter from going below the min \/
// Prevent the counter from going above the max \/
// Disable buttons when the limit is reached \/
// Show a warning/message when the counter is at min or max \/
