import { Loader2 } from "lucide-react";
const loading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen z-[999] bg-stone-900">
            <Loader2 className="animate-spin" size={80} />
        </div>
    );
};

export default loading;
