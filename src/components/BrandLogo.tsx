import React from 'react';
import officialLogoImg from '../assets/images/lakar_official_logo_cropped.png';
import officialEmblemImg from '../assets/images/lakar_official_emblem_cropped.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'emblem-only' | 'full-graphic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDarkBg = variant === 'light'; // variant 'light' means placed on dark background (white text)
  const tealColor = isDarkBg ? '#FFFFFF' : '#004C4C';
  const goldColor = '#C99A2E';
  const subtextColor = isDarkBg ? '#E0B64B' : '#C99A2E';

  // Render the actual official logo artwork supplied by the client.
  // It is intentionally shown on a white card so the white fist/details remain visible.
  if (variant === 'full-graphic') {
    const graphicHeights = {
      sm: 'h-12 sm:h-14',
      md: 'h-20 sm:h-24',
      lg: 'h-28 sm:h-32',
      xl: 'h-36 sm:h-44',
    };
    return (
      <div className={`inline-flex items-center rounded-2xl overflow-hidden bg-white px-2.5 py-1.5 shadow-md border border-[#C99A2E]/40 ${className}`}>
        <img
          src={officialLogoImg}
          alt="Logo rasmi Lakar Impian Legacy - Lakar Design, Impian Anda Misi Kami"
          referrerPolicy="no-referrer"
          className={`${graphicHeights[size]} w-auto max-w-[78vw] object-contain mx-auto`}
        />
      </div>
    );
  }

  // Sizing styles for emblem
  const emblemSizes = {
    sm: 'w-11 h-11',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const textSizes = {
    sm: { main: 'text-[15px] font-black tracking-wide', sub: 'text-[10px] tracking-[0.2em]', reg: 'text-[9px]' },
    md: { main: 'text-lg sm:text-xl font-black tracking-wide', sub: 'text-xs tracking-[0.22em]', reg: 'text-[10px]' },
    lg: { main: 'text-2xl sm:text-3xl font-black tracking-wide', sub: 'text-sm tracking-[0.25em]', reg: 'text-xs' },
    xl: { main: 'text-3xl sm:text-4xl font-black tracking-wide', sub: 'text-base tracking-[0.28em]', reg: 'text-sm' },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem: Fist gripping golden pen emerging from teal crescent with gold stars */}
      <div className={`relative ${emblemSizes[size]} shrink-0 rounded-2xl p-1 bg-white border-2 border-[#C99A2E] shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
        <img
          src={officialEmblemImg}
          alt="Emblem rasmi Lakar Impian Legacy - Pen Emas & Sabit"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Typography Section */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col">
          {/* Primary brand name: LAKAR IMPIAN LEGACY */}
          <span
            className={`${textSizes[size].main} leading-tight uppercase font-black`}
            style={{ color: tealColor }}
          >
            Lakar Impian Legacy
          </span>

          {/* Sub-brand: LAKAR DESIGN with gold separator lines */}
          <div className="flex items-center gap-2 my-0.5 sm:my-1">
            <span className="h-[1.5px] w-5 sm:w-8 rounded-full" style={{ backgroundColor: goldColor }} />
            <span
              className={`${textSizes[size].sub} font-bold uppercase`}
              style={{ color: subtextColor }}
            >
              LAKAR DESIGN
            </span>
            <span className="h-[1.5px] w-5 sm:w-8 rounded-full" style={{ backgroundColor: goldColor }} />
          </div>

          {/* Jawi Motto & Registration number */}
          {showSubtitle && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`${textSizes[size].reg} px-1.5 py-0.5 rounded bg-[#C99A2E]/20 text-[#E0B64B] font-bold border border-[#C99A2E]/30`}>
                NO: MA0307747-A
              </span>
              <span className={`text-[11px] sm:text-xs font-semibold ${isDarkBg ? 'text-white/85' : 'text-[#004C4C]/85'}`}>
                "Impian Anda Misi Kami"
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
