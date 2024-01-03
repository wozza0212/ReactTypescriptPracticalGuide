import { ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
  mode: "warning" | "hint";
  severity?: "low" | "medium" | "high";
};

const InfoBox = ({ mode, children, severity }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  } else if (mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
