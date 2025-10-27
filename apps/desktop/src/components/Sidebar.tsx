import { Button } from "@superset/ui/button";

interface Tab {
    id: string;
    title: string;
    icon?: string;
    url?: string;
    type: "terminal" | "browser" | "folder";
}

interface SidebarProps {
    onTabSelect: (tabId: string) => void;
    activeTabId?: string;
    onCollapse: () => void;
}

export function Sidebar({ onTabSelect, activeTabId, onCollapse }: SidebarProps) {
    const tab: Tab = { id: "1", title: "Terminal", type: "terminal" };

    return (
        <div className="flex flex-col h-full w-64 select-none bg-neutral-900 text-neutral-300 border-r border-neutral-800">
            {/* Top Section - Window Controls */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-neutral-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={onCollapse}
                        className="opacity-70 hover:opacity-100"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 4L6 8L10 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
                {/* New Tab Button */}
                <Button variant="ghost" size="sm" className="w-full justify-start opacity-70 hover:opacity-100">
                    <span>+</span>
                    <span>New Tab</span>
                </Button>

                {/* Terminal Tab */}
                <Button
                    variant={activeTabId === tab.id ? "outline" : "ghost"}
                    size="sm"
                    onClick={() => onTabSelect(tab.id)}
                    className={`w-full justify-start ${activeTabId === tab.id ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                >
                    <span>▶︎</span>
                    <span className="truncate">{tab.title}</span>
                </Button>
            </div>
        </div>
    );
}
