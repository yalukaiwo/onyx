export interface IVKProps {
  width: number;
  height: number;
  color?: string;
  opacity?: number;
  className?: string;
}

const VK: React.FC<IVKProps> = ({
  width,
  height,
  color,
  opacity,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.68707 1.68719C0 3.37425 0 6.08952 0 11.5201V12.4801C0 17.9107 0 20.626 1.68707 22.3131C3.37413 24.0001 6.0894 24.0001 11.52 24.0001H12.48C17.9106 24.0001 20.6259 24.0001 22.313 22.3131C24 20.626 24 17.9107 24 12.4801V11.5201C24 6.08952 24 3.37425 22.313 1.68719C20.6259 0.00012207 17.9106 0.00012207 12.48 0.00012207H11.52C6.0894 0.00012207 3.37413 0.00012207 1.68707 1.68719ZM4.05005 7.30017C4.18005 13.5402 7.3 17.2902 12.77 17.2902H13.0801V13.7202C15.0901 13.9202 16.61 15.3902 17.22 17.2902H20.06C19.28 14.4502 17.2299 12.8802 15.95 12.2802C17.2299 11.5402 19.0299 9.74017 19.4599 7.30017H16.8799C16.3199 9.28017 14.6601 11.0802 13.0801 11.2502V7.30017H10.5V14.2202C8.9 13.8202 6.88005 11.8802 6.79005 7.30017H4.05005Z"
        fill={color ?? "#000"}
        fillOpacity={opacity ?? 1}
      />
    </svg>
  );
};

export default VK;
