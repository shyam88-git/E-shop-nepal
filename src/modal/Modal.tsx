import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalPropsI {
  title?: string;
  subTitle?: string;
  modalOpen: boolean;
  setModalOpen(val: boolean): void;
  className?: string;
  children: React.ReactNode;
  showCancelButton?: boolean;
}
const Modal = ({
  title,
  subTitle,
  modalOpen,
  setModalOpen,
  className,
  children,
  showCancelButton,
}: ModalPropsI) => {
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent
        showCancelButton={showCancelButton}
        className={cn("max-h-[700px] overflow-y-auto", className)}
      >
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {subTitle && <DialogDescription>{subTitle}</DialogDescription>}
        </DialogHeader>
        <hr />
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
