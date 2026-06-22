export default function DashBoardLayout({ children }) {
    return (
        <div className="flex h-screen bg-background">
            <div className="flex flex-1 overflow-hidden">
                {/* sidebar */}
                <div className="border">Sidebar</div>

                {/* main content */}

                <main className="p-5">
                    {/* navbar */}
                    <div>Navbar</div>
                    {children}
                </main>
            </div>

        </div>
    );
}