import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

// icon download
import iconLoadingPrimary from "./../../assets/loading-primary.svg";
import iconLoadingWhite from "./../../assets/loading-white.svg";

const Button = ({
    label,
    variant,
    type,
    target,
    htmlType,
    disabled,
    icon,
    iconPosition,
    iconStyles,
    isLoading,
    loadingIcon,
    href,
    size,
    styles,
    onClick,
    backgroundColor,
}) => {
    return type !== "link" ? (
        <button
            type={htmlType}
            onClick={onClick}
            className={[
                variant,
                type,
                disabled ? "disabled" : "",
                size,
                isLoading ? "loading-active" : "",
                iconPosition === "left" ? "left-icon" : "right-icon",
                loadingIcon ? "loading-icon" : "",
            ].join(" ")}
            style={{ backgroundColor: backgroundColor, ...styles }}
            disabled={disabled || isLoading}
        >
            {isLoading && (
                <img
                    className="icon-loading"
                    src={
                        loadingIcon
                            ? loadingIcon
                            : type === "primary"
                              ? iconLoadingWhite
                              : iconLoadingPrimary
                    }
                    alt="icon-loading-white"
                />
            )}
            {icon && (
                <img
                    className="icon-btn"
                    style={iconStyles}
                    src={icon}
                    alt="btn-icon"
                />
            )}
            {label}
        </button>
    ) : (
        <a target={target} href={href}>
            {label ? label : href}
        </a>
    );
};

export default Button;

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["rounded", "circle"]),
    type: PropTypes.oneOf(["primary", "secondary", "dashed", "link"]),
    target: PropTypes.oneOf(["blank", "self"]),
    htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(["right", "left"]),
    iconStyles: PropTypes.object,
    isLoading: PropTypes.bool,
    loadingIcon: PropTypes.node,
    href: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    styles: PropTypes.object,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
};

Button.defaultProps = {
    type: "primary",
    variant: "rounded",
    target: "self",
    disabled: false,
    icon: null,
    iconPosition: "left",
    iconStyles: {},
    isLoading: false,
    loadingIcon: null,
    href: "",
    size: "lg",
    styles: {},
    onClick: () => {},
    backgroundColor: "",
};
