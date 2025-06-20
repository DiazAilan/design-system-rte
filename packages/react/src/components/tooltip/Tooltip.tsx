import { TooltipProps as CoreTooltipProps } from "@design-system-rte/core/components/tooltip/tooltip.interface";
import { getAutoPlacement } from "@design-system-rte/core/components/utils/auto-placement";
import { forwardRef } from "react";

import { concatClassNames } from "../utils";

import style from "./Tooltip.module.scss";

interface TooltipProps extends CoreTooltipProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, position = "top", alignment = "center", label, arrow = true, className = "", ...props }, ref) => {
    const tooltipRef = (node: HTMLDivElement) => {
      if (ref && typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }

      if (node && position === "auto") {
        const tooltipLabel = node.querySelector("[role='tooltip']");
        const autoPosition = getAutoPlacement(node, tooltipLabel!, "top");
        node.setAttribute("data-position", autoPosition);
      }
    };

    return (
      <div
        ref={tooltipRef}
        className={concatClassNames(style.tooltip, className)}
        data-position={position === "auto" ? undefined : position}
        data-alignment={alignment}
        data-arrow={arrow}
        tabIndex={0}
        {...props}
      >
        {label && (
          <span role="tooltip" className={style.tooltipLabel}>
            {label}
          </span>
        )}
        {children}
      </div>
    );
  },
);

export default Tooltip;
