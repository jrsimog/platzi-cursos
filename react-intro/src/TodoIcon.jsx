import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
function TodoIcon({ type }) {

	const iconTypes = {
		'check': CheckSVG,
		'delete': DeleteSVG
	}

	return (
		<span
			className={`Icon Icon-svg-${type}`}
			onClick={onClick}
		>{iconTypes[type]}</span>
	)

}

export {
	TodoIcon
};
