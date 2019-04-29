import styled from "styled-components";

import FocusTrap from "focus-trap-react";

const ModalScreen = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;

	img {
		width: 80%;
		margin: 0 auto;
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
				<button>
					<img src={props.image} />
				</button>
			</div>
		</FocusTrap>
	</ModalScreen>
);

export default Modal;
