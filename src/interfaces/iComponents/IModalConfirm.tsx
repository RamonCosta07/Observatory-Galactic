export interface IModalProps {
  msg: string;
  handleConfirmModal?: () => void;
  handleCancelModal: () => void;
}

export interface IModalDeleteAccountProps {
  msg: string | React.ReactNode;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
  secondsRemaining: number;
}
