import { ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
  mode: "warning" | "hint";
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  } else if (mode === "warning") {
    return (
      <aside className="infobox infobox-warning warning--medium">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
