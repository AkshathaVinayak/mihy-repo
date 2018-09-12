import {
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getCommonContainer,
  getLabelWithValue
} from "../../utils";

const reviewTradeDetails = getCommonGrayCard({
  header: getCommonSubHeader("Trade Details"),
  viewOne: getCommonContainer({
    reviewLicenceType: getLabelWithValue("Licence Type", "Temporary"),
    reviewTradeName: getLabelWithValue("Trade Name", "Matchbox Packing Unit"),
    reviewTradeMobility: getLabelWithValue("Trade Mobility", "Immovable"),
    reviewCommencementDate: getLabelWithValue(
      "Commencement Date",
      "12/12/2018"
    ),
    reviewOperationalArea: getLabelWithValue("Operational Area", "2000 Sqft"),
    reviewNoOfEmployee: getLabelWithValue("No of Employees", "200"),
    reviewGSTNo: getLabelWithValue("GST No.", "364565")
  }),
  viewTwo: getCommonContainer({
    reviewTradeCategory: getLabelWithValue("Trade Category", "Goods"),
    reviewTradeType: getLabelWithValue("Trade Type", "Value"),
    reviewTradeSubtype: getLabelWithValue(
      "Trade Sub-Type",
      "Manufacuring Plant"
    ),
    reviewTradeUOM: getLabelWithValue("UOM (Unit of Measurement)", "Sq Ft"),
    reviewTradeUOMValue: getLabelWithValue("UOM Value", "2000")
  }),
  viewThree: getCommonContainer({
    reviewAccessoryType: getLabelWithValue("Accesory Type", "Generator"),
    reviewAccessoryUOM: getLabelWithValue("UOM", "Watt"),
    reviewAccessoryUOMValue: getLabelWithValue("UOM Value", "5000")
  }),
  viewFour: getCommonContainer({
    reviewPropertyID: getLabelWithValue("Property Assessment ID", "456"),
    reviewElectricityNo: getLabelWithValue("Electricity Connection No.", "789"),
    reviewCity: getLabelWithValue("City", "Amritsar"),
    reviewPincode: getLabelWithValue("Pincode", "875478"),
    reviewDoorNo: getLabelWithValue("Door/House No.", "707/B"),
    reviewBuildingName: getLabelWithValue(
      "Building/Company Name",
      "Suncity Apartments"
    ),
    reviewStreetName: getLabelWithValue("Street Name", "Old Gurudwara Street"),
    reviewMohalla: getLabelWithValue("Mohalla", "Old Gurudwara Street")
  })
});

const reviewOwnerDetails = getCommonGrayCard({
  header: getCommonSubHeader("Owner Details"),
  viewFive: getCommonContainer({
    reviewOwnerName: getLabelWithValue("Name", "Satinder Singh"),
    reviewOwnerFatherName: getLabelWithValue(
      "Father/Husband's Name",
      "Jaswindar Singh"
    ),
    reviewOwnerGender: getLabelWithValue("Gender", "Male"),
    reviewOwnerAge: getLabelWithValue("Age", "45"),
    reviewOwnerPhoneNo: getLabelWithValue("Phone No.", "9999999999"),
    reviewOwnerEmail: getLabelWithValue("Email", "satinder@gmail.com"),
    reviewOwnerPAN: getLabelWithValue("PAN No.", "BUFAS1234H"),
    reviewOwnerAddr: getLabelWithValue(
      "Corrospondance Address",
      "707/B, railway Colony, Vikarnagar, Amritsar"
    ),
    reviewOwnerSpecialCat: getLabelWithValue("Special Category", "None")
  })
});

export const tradeReviewDetails = getCommonCard({
  header: getCommonTitle("Please review your Application and Submit"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  reviewTradeDetails,
  reviewOwnerDetails
});
