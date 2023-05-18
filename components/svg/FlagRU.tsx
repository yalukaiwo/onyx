interface IFlagRUProps {
  width: number;
  height: number;
}

const FlagRU: React.FC<IFlagRUProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
    >
      <rect width={width} height={height} fill="url(#patternFlagRU)" />
      <defs>
        <pattern
          id="patternFlagRU"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageFlagRU" transform="scale(0.00625)" />
        </pattern>
        <image
          id="imageFlagRU"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default FlagRU;
