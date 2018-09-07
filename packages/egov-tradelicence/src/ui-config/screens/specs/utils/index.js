export const getStepperObject = (
  stpperProps,
  stepsData,
  uiFramework = "material-ui"
) => {
  let stepperData = {};
  if (uiFramework === "material-ui") {
    stepperData = {
      componentPath: "Stepper",
      uiFramework: "custom-molecules",
      props: {
        steps: stepsData,
        ...stpperProps.props
      }
    };
  }
  return stepperData;
};

export const getCommonHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "apply-application-for-new"
    }
  };
};

export const getCommonSubHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "mihy-subheader"
    }
  };
};

export const getCommonParagraph = Paragraph => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: Paragraph,
      className: "mihy-paragraph"
    }
  };
};

export const getCommonCard = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "common-card-css"
    },
    children
  };
};

export const getInnerCard = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "common-card-css"
    },
    children
  };
};

export const getBreak = () => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Break"
  };
};

export const getLabel = label => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label
    }
  };
};

export const getTextField = (
  label,
  placeholder,
  required,
  pattern,
  gridDefination = {
    xs: 12
  }
) => {
  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required
    },
    gridDefination,
    required,
    pattern
  };
};

export const getSelectTextField = (
  label,
  placeholder,
  required,
  pattern,
  gridDefination = {
    xs: 12
  }
) => {
  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      select: true,
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required
    },
    gridDefination,
    required,
    pattern
  };
};
