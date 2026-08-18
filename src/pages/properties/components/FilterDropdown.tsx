import { useState, useRef, useEffect } from 'react';

interface FilterDropdownProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function FilterDropdown({ options, value, onChange, placeholder }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label || placeholder || value;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-[13px] font-medium transition-all duration-200 whitespace-nowrap select-none shrink-0 w-full md:w-auto justify-between md:justify-start ${
          open
            ? 'border-primary-400 bg-primary-50 text-primary-700 shadow-[0_0_0_3px_rgba(var(--primary-500),0.08)]'
            : 'border-background-200 bg-card text-foreground-700 hover:border-background-300 hover:bg-background-100'
        }`}
      >
        <span className="truncate">{selectedLabel}</span>
        <i className={`ri-arrow-down-s-line text-[11px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-full md:w-48 bg-background-50 rounded-xl border border-background-200 shadow-lg shadow-black/5 z-40 overflow-hidden animate-[dropdown-in_0.15s_ease-out]">
          <div className="max-h-56 overflow-y-auto py-1 overscroll-contain">
            {options.map((opt) => {
              const isActive = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-semibold'
                      : 'text-foreground-700 hover:bg-background-100'
                  }`}
                >
                  {opt.label}
                  {isActive && (
                    <i className="ri-check-line text-primary-500 ml-2 text-xs" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}