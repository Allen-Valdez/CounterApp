import { useState } from 'react';
import './Counter.css';

const Counter = () => {
	const [count, setCount] = useState(1);
	const [step, setStep] = useState(1);
	const [max, setMax] = useState(10);
	const [min, setMin] = useState(-10);
	const [maxInput, setMaxInput] = useState('10');
	const [minInput, setMinInput] = useState('-10');
	const [stepInput, setStepInput] = useState('1');

	const incrementCount = () => {
		setCount(prevCount => Math.min(prevCount + step, max));
	};

	const decreaseCount = () => {
		setCount(prevCount => Math.max(prevCount - step, min));
	};

	const resetCount = () => {
		setCount(0);
	};

	const onChangeStep = e => setStepInput(e.target.value);
	const onChangeMax = e => setMaxInput(e.target.value);
	const onChangeMin = e => setMinInput(e.target.value);

	const onBlurMax = () => {
		const maxVal = Math.max(Number(maxInput) || 1, 1);

		setMax(maxVal);
		setMaxInput(String(maxVal));
		setCount(prevCount => Math.min(prevCount, maxVal));
	};

	const onBlurMin = () => {
		const minVal = Math.min(Number(minInput) || -1, -1);

		setMin(minVal);
		setMinInput(String(minVal));
		setCount(prevCount => Math.max(prevCount, minVal));
	};

	const onBlurStep = () => {
		const stepVal = Math.max(Number(stepInput) || 1, 1);

		setStep(stepVal);
		setStepInput(String(stepVal));
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
						<input id='step' type='number' value={stepInput} onChange={onChangeStep} min='1' onBlur={onBlurStep} />
					</div>

					<div className='input-control'>
						<label htmlFor='max'>Max</label>
						<input id='max' type='number' value={maxInput} onChange={onChangeMax} onBlur={onBlurMax} min='1' />
					</div>

					<div className='input-control'>
						<label htmlFor='min'>Min</label>
						<input id='min' type='number' value={minInput} onChange={onChangeMin} onBlur={onBlurMin} max='-1' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
