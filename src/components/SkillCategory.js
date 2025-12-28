export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-alpha)] rounded-[40px]
     p-8 transition-all duration-300 hover:border-primary/20 flex flex-col">
      <h3 className="text-2xl font-black text-[var(--text-main)] mb-6 tracking-tight">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-1.5 bg-gray-500/5 border border-[var(--border-alpha)] 
            rounded-lg text-[10px] text-[var(--text-muted)] uppercase font-black 
            tracking-widest hover:text-primary transition-colors "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}