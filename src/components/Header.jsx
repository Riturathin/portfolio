export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <div className="text-center p-8">
                <h1 className="text-4xl font-bold mb-4 tracking-tight">
                    <span>• UI Architect with over 13 years of experience leading end-to-end frontend strategy,
design systems, and performance opKmisaKon.
</span>
• Applying AI, both GeneraKve and AgenKc to solve diﬃcult architectural problems.
• Proven track record of aligning technical architecture with business objecKves to
enhance release velocity and elevate product quality.
• Skilled in deploying scalable, reusable component libraries and micro-frontend
frameworks
• Proficient in managing, guiding and mentoring large engineering teams (comprising
over 30 members),
• Establishing coding standards and managing CI/CD pipelines
• CollaboraKng eﬀecKvely with cross-funcKonal stakeholders.
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    UI Architect • Frontend Engineer • Design Technologist
                </p>
                <div className="space-x-4">
                    <a
                        href="https://github.com/riturathin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:riturathinsharma@gmail.com"
                        className="px-5 py-2 border border-gray-500 hover:border-blue-500 rounded-full transition"
                    >
                        Contact
                    </a>
                </div>
            </div>
            <nav className="flex items-center gap-4">
                <a href="#projects" className="text-sm hover:underline">Projects</a>
                <a href="#experience" className="text-sm hover:underline">Experience</a>
                <a href="#contact" className="btn btn-ghost text-sm">Contact</a>
            </nav>
        </header>
    )
}