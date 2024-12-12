import { cva } from "class-variance-authority";

const overlayVariants = cva("fixed inset-0 z-50");

export const OverlayLayout = ({
    className = "flex items-center bg-gray-500/80 justify-center",
    onDismiss,
    children,
}) => {
    return (
        <div
            className={overlayVariants({ className })}
            onClick={onDismiss}
        >
            <div
             onClick={(e) => {
                e.stopPropagation();
            }}
            >
                {children}
            </div>
        </div>
    );
};