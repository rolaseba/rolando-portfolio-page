import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoId: string;
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-200">

                {/* Header/Close */}
                <div className="absolute top-0 right-0 z-10 p-4">
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                        aria-label="Close video"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Video Container (16:9 Aspect Ratio) */}
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
