import styled from "styled-components";

import FocusTrap from "focus-trap-react";

const ModalScreen = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;

	div {
		width: 80%;

		button {
			width: 100%;
			border: unset;
			padding: 0;
			background-color: transparent;

			img {
				width: 100%;
			}
		}
	}

	@media (min-width: 600px) {
		align-items: flex-end;
		div {
			width: 50%;

			button:focus {
				outline-color: orange;
			}
		}
	}
`;

const Modal = props => (
	<ModalScreen>
		<FocusTrap
			focusTrapOptions={{
				onDeactivate: props.closeImage,
				clickOutsideDeactivates: true
			}}
		>
			<div>
				<button onClick={props.closeImage}>
					<img src={props.image} />
				</button>
			</div>
		</FocusTrap>
	</ModalScreen>
);

export default Modal;
