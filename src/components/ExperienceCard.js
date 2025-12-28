export default function ExperienceCard({ role, company, date, description, current }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2
       border-gray-700 bg-[var(--bg-main)] z-10"></div>
      
      <div className="bg-[var(--bg-card)] border border-[var(--border-alpha)] 
      rounded-xl p-8 transition-all hover:border-primary/20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-black text-[var(--text-main)] tracking-tight">
              {role}
            </h3>
            <p className="text-primary font-bold mt-2 text-lg">
              {company}
            </p>
          </div>
          <span className="text-[11px] text-[var(--text-muted)] font-bold uppercase
           tracking-widest mt-2 md:mt-1">
            {date}
          </span>
        </div>

        <p className="text-[var(--text-muted)] leading-relaxed text-lg mb-8 max-w-4xl">
          {description}
        </p>

        {current && (
          <span className="inline-block bg-white text-black text-[9px] 
          font-black uppercase px-4 py-1.5 rounded-sm tracking-tighter">
            Current Role
          </span>
        )}
      </div>
    </div>
  );
}